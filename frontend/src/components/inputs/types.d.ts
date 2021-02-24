export interface TextFieldProps {
    title: string;
    state: [string, Dispatch<SetStateAction<string>>];
    required?: boolean;
    password?: boolean;
}

export interface ButtonProps {
    onClick?: () => void;
    submit?: boolean;
    className?: string;
}
