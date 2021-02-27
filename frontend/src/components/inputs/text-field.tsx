import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import styles from './text-field.module.scss';

export interface TextFieldProps {
    title: string;
    state: [string, Dispatch<SetStateAction<string>>];
    required?: boolean;
    password?: boolean;
}

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
            <input required={required} value={value} onChange={handleChange} type={password ? 'password' : 'text'} />
        </div>
    );
}
