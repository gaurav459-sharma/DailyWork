import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '20%',
    left: '35%',
    right: '35%',
    bottom: '20%',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

const ModalC = ({isOpen, onClose, children}) => {

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {children}
      </Modal>
    </div>
  );
}

export default ModalC;