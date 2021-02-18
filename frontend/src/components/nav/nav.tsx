import { FC } from 'react';
import styles from './nav.module.scss';

const Nav: FC = () => (
    <div className={styles.nav}>
        <div className={styles.container}>
            <p>Nav</p>
        </div>
    </div>
);

export default Nav;