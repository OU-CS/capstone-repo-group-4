import { FC } from 'react';
import styles from './modal.module.scss';
import { ModalProps } from './types';

export const Modal: FC<ModalProps> = ({ children, style }) => (
    <div id="modal" className={`${styles.modal} ${style || ''}`}>
        <div className={`${styles.container} modalContainer`}>
            {children}
        </div>
    </div>
);
