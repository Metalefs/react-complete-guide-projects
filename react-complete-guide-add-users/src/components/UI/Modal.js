import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Modal.module.css";

import Button from "./Button";
import Card from "./Card";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm} />;
  };
  
  const ModalOverlay = (props) => {
    return (
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    );
  };
  
function Modal(props) {

    return (
        <React.Fragment>
          {ReactDOM.createPortal(
            <Backdrop onConfirm={props.close} />,
            document.getElementById('backdrop-root')
          )}
          {ReactDOM.createPortal(
            <ModalOverlay
              title={props.title}
              message={props.children}
              onConfirm={props.close}
            />,
            document.getElementById('overlay-root')
          )}
        </React.Fragment>
      );
}

export default Modal;