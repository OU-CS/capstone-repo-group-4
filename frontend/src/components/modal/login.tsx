import { FC } from "react";
import { Modal } from "./modal";
import { AuthModalProps } from "./types";

/**
 * Modal to register
 */
export const LoginModal: FC<AuthModalProps> = ({ toggleLoginModal, toggleRegisterModal }) => {

    /**
     * Switches between login modal and register modal
     */
    const switchModal = () => {
        toggleLoginModal();
        toggleRegisterModal();
    }

    return (
        <Modal>
            <button 
                type="button"
                onClick={switchModal}
            >
                Login
            </button>
        </Modal>
    )
};
