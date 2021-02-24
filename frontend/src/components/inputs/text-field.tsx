import { ChangeEvent, FC } from 'react';
import styles from './text-field.module.scss';
import { TextFieldProps } from './types';

export const TextField: FC<TextFieldProps> = ({ title, required, password, state }) =>  {
    const [value, setValue] = state;

    /**
     * Controls state of input
     */
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <div className={`${styles.textField} textField`}>
            <p>
                {title}
                {required && <span className={styles.required}>*</span>}
            </p>
            <input value={value} onChange={handleChange} type={password ? 'password' : 'text'} />
        </div>
    );
}
