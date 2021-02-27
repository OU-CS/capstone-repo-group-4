import { FC } from 'react';
import styles from './layout.module.scss';

export const Layout: FC = ({ children }) => (
    <div className={styles.layout}>
        <div className={styles.container}>
            {children}
        </div>
    </div>
);
