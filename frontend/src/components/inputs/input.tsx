/* eslint-disable import/no-extraneous-dependencies */
import * as Chakra from '@chakra-ui/input';
import { Button } from '@chakra-ui/react';
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';

export interface InputProps extends Chakra.InputProps {
    state: [string, Dispatch<SetStateAction<string>>];
}

/**
 * Standard text field input
 */
export const Input: FC<InputProps> = (props) =>  {
    const { state } = props;
    const [value, setValue] = state;

    /**
     * Controls state of input
     */
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <Chakra.Input 
            value={value}
            onChange={handleChange}
            {...props}
        />
    );
}

/**
 * Password input that includes a show/hide button
 */
export const PasswordInput: FC<InputProps> = (props) =>  {
    const [show, setShow] = useState(false)

    /**
     * Switches between "Show" and "Hide"
     */
    const handleClick = () => setShow(!show)

    return (
        <Chakra.InputGroup>
            <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                {...props}
            />
            <Chakra.InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                </Button>
            </Chakra.InputRightElement>
        </Chakra.InputGroup>
    )
}
