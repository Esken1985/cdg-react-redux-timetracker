import {createContext} from 'react';

const ModalContext = createContext({
    modalIsOpen: false,
    openModal: () => {}, 
    closeModal: () => {},
})

export default ModalContext