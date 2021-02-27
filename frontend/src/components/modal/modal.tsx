import { FC } from 'react';
import styles from './modal.module.scss';

type ModalProps = {
    style: string;
}

export const Modal: FC<ModalProps> = ({ children, style }) => (
    <div id="modal" className={`${styles.modal} ${style || ''}`}>
        <div className={`${styles.container} modalContainer`}>
            {children}
        </div>
    </div>
);
