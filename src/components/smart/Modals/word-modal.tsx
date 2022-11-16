import React from 'react';

import Modal from 'components/dumb/Modal';
import { Translation } from 'interfaces';

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
  if (!isOpen) return null;

  return (
      <Modal isOpen={isOpen} handleClose={handleClose} wrapperId="word-modal">
        some content {word?.sourceText}
      </Modal>
  );
}
