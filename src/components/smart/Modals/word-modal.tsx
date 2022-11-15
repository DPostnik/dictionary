import React from 'react';

import { Translation } from 'interfaces';
import Modal from 'components/dumb/Modal';
import ReactPortal from "components/dumb/Portal";

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
    <ReactPortal wrapperId="word-modal">
      <Modal isOpen={isOpen} handleClose={handleClose}>
        some content {word?.sourceText}
      </Modal>
    </ReactPortal>
  );
}
