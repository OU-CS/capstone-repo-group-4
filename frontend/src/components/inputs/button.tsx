import { FC } from 'react';
import styles from './button.module.scss';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ children, onClick, submit }) => (
    <button 
        type={submit ? 'submit' : 'button'}
        onClick={onClick}
        className={`${styles.button} button`}
    >
        {children}
    </button>
);

/**
 * A button which has no dramatic styles but 
 * is improved for accessibility
 */
export const CasualButton: FC<ButtonProps> = ({ children, onClick, className }) => {
    
    const onClickWrapper = (e) => {
        e.target.blur();
        if(onClick) {
            onClick();
        }
    }

    return(
        <button 
            type="button"
            onClick={onClickWrapper}
            className={`${styles.casualButton} ${className}`}
        >
            {children}
        </button>
    );
}
