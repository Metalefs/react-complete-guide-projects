import styles from "./Modal.module.css";
import Button from "./Button";
import Card from "./Card";

function Modal(props) {

    function closeModalHandler(){
        props.close(true);
    }

    return  <div className={styles.backdrop} onClick={closeModalHandler}>
               <div style={{height:"100%", display:"flex"}}>
                    <Card className={styles.modal}>
                        <nav className={styles.header}><h2>{props.title}</h2></nav>
                        <div className={styles.content}>
                            {props.children}
                            <footer className={styles.actions}>
                                <Button onClick={closeModalHandler}>Okay</Button>
                            </footer>
                        </div>
                    </Card> 
               </div>
            </div>
}

export default Modal;