import { FC } from 'react';
import styles from './layout.module.scss';

const Layout: FC = ({ children }) => (
    <div className={styles.layout}>
        <div className={styles.container}>
            {children}
        </div>
    </div>
);

export default Layout;