import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#modalElement')

const customStyles = {
  content: {
    // width: 'fit-content',
    height: 'fit-content',
    maxHeight: '90vh',
    maxWidth: '920px',
    overflowY: 'scroll',
    margin: 'auto',
    backgroundColor: '#28094B',
    border: 'none',
    boxShadow: '0px -1px 20px 10px rgba(0, 0, 0, 0.10)',
    zIndex: '9999',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.20)',
    zIndex: '9999',
  }
};

export default function Modal(props) {
  const { showModal } = props;

  return (
    <ReactModal isOpen={Boolean(showModal)} style={customStyles}>
      {props.children}
    </ReactModal>
  )
}