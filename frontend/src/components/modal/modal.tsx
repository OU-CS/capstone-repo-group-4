import { FC } from 'react';
import styles from './modal.module.scss';

const Modal: FC = ({ children }) => (
    <div id="modal" className={styles.modal}>
        <div className={styles.container}>
            {children}
        </div>
    </div>
);

export default Modal;