import { ReactNode } from 'react';

import SvgComponent from 'components/dumb/svg';
import { IconType } from 'enums/icons';

import classes from 'components/dumb/Modal/modal.module.scss';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
};

export default function Modal({ isOpen, handleClose, children }: ModalProps) {
  return isOpen ? (
    <div className={classes.layout} onClick={handleClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <SvgComponent
          icon={IconType.Close}
          onClick={handleClose}
          className={classes.icon}
        />
        {children}
      </div>
    </div>
  ) : null;
}
