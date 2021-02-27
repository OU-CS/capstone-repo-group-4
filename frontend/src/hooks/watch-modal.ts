import { useEffect, useState } from "react"

type ModalResponse = [
    () => void,
    boolean
]

const useWatchModal = (): ModalResponse => {
    const [isOpen, setOpen] = useState(false);

    /**
     * Checks that the target's id for the modal
     * before closing it.
     */
    const tryClosingModal = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if(target?.id === 'modal') {
            setOpen(false);   
        }
    }

    /**
     * When toggling modal, add an event listener to listen
     * for a click outside the modal.
     */
    useEffect(() => {
        const modal = document.getElementById('modal');
        if(isOpen) {
            modal?.addEventListener('click', tryClosingModal);
        } else {
            modal?.removeEventListener('click', tryClosingModal);
        }
    }, [isOpen])

    /**
     * Toggle the modal
     */
    const toggleModal = () => {
        setOpen(!isOpen);
    }

    return [toggleModal, isOpen];
}

export default useWatchModal;
