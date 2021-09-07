import styles from "./Modal.module.css";
import Button from "./Button";

function Modal(props) {

    function closeModalHandler(){
        props.close(true);
    }

    return  <div className={styles.overlay}>
               <div style={{height:"100%", display:"flex"}}>
                    <div className={styles.modal}>
                        <nav className={styles.modal__nav}><h2>{props.title}</h2></nav>
                        <div className={styles.modal__body}>
                            {props.children}
                            <footer className={styles.modal__footer}>
                                <Button onClick={closeModalHandler}>Okay</Button>
                            </footer>
                        </div>
                    </div> 
               </div>
            </div>
}

export default Modal;