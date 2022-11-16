import React, { useEffect, useState } from 'react';

import { Translation } from 'interfaces';
import Modal from 'components/dumb/Modal';
import TextField from 'components/dumb/TextField';
import classes from './word-modal.module.scss';
import Headline from 'components/dumb/Headline';
import Button from 'components/dumb/Button';
import { ButtonType } from 'enums/buttonTypes';

type WordModalProps = {
  word?: Translation;
  isOpen: boolean;
  handleClose: () => void;
};

export default function WordModal({
  word,
  isOpen,
  handleClose,
}: WordModalProps) {
  const [translation, setTranslation] = useState<Translation | null>(
    word || null
  );

  useEffect(() => {
    setTranslation(null);
  }, [isOpen]);

  const onChangeSourceText = (name: string, value: string) => {
    setTranslation({ ...translation, [name]: value });
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} wrapperId="word-modal">
      <Headline>Добавление нового перевода</Headline>
      <TextField
        label="Исходный текст"
        onChange={onChangeSourceText}
        value={translation?.sourceText || ''}
        name="sourceText"
        placeholder="Введите исходный текст"
      />
      <TextField
        label="Перевод"
        onChange={onChangeSourceText}
        value={translation?.targetText || ''}
        name="targetText"
        placeholder="Введите перевод"
      />
      <TextField
        label="Описание"
        onChange={onChangeSourceText}
        value={translation?.targetText || ''}
        name="description"
        placeholder="Введите описание"
      />
      <div className={classes.button__wrapper}>
        <Button buttonType={ButtonType.Secondary}>Сохранить</Button>
      </div>
    </Modal>
  );
}
