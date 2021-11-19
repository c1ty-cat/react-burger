import { React, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from './modalOverlay.module.css'
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {

  const closeModalOnEsc = (e) => {
    if (e.key === 'Escape') props.onClose()
  }

  const closeModalOnClick = (e) => {
    if (e.target === props.overlayRef.current) props.onClose()
  }

  useEffect(() => {
    document.addEventListener('keydown', closeModalOnEsc);
    document.addEventListener('click', closeModalOnClick);

    return () => {
      document.removeEventListener('keydown', closeModalOnEsc);
      document.removeEventListener('click', closeModalOnClick);
    }
  }, [])

  return (
      <div ref={props.overlayRef} onClose={props.onClose} className={styles.overlay}>
      </div>
  )
}

ModalOverlay.propTypes = {
  modalRef: PropTypes.object.isRequired,
  onCLose: PropTypes.func.isRequired,
}

export default ModalOverlay
