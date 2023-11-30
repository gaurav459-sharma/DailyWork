import React, { useState } from 'react'
import Modal from './modal/Modal.jsx';
import Login from './Login.js';
import Register from './Register';

function LoginRegisterModal({ isOpen, onClose }) {
    const [flag, setFlag] = useState(true);

    const openLogin = () => {
        setFlag((flag) => !flag);
    }

    const openRegister = () => {
        setFlag((flag) => !flag);
    }

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose} >
                { 
                    flag 
                    ?(<Login onClose={openRegister} closeModal={onClose}/>)
                    :(<Register onClose={openLogin}/>)
                }
            </Modal>
        </div>
    )
}

export default LoginRegisterModal