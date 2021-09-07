import React, {useRef, useState} from 'react';
import styles from "./UserForm.module.css"

import Button from "../UI/Button";
import Card from '../UI/Card';
import Modal from '../UI/Modal';

function UserForm(props) {
    const usernameInputRef = useRef();
    const ageInputRef = useRef();


    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [modal, setModal] = useState(<React.Fragment></React.Fragment>);
    
    function handleUsernameChanged(event){
        setName(event.target.value)
    }
    function handleUserAgeChanged(event){
        setAge(event.target.value)
    }

    function userFormSubmitHandler(event){
        event.preventDefault();

        if(name.trim().length === 0 || age.trim().length === 0){
            let aux = <Modal title="Dados inválidos!" close={closeModal}>
                      <p>Por favor insira um nome e idade (valor não vazio)</p>
                    </Modal>
            setModal(aux);
            return;
        }
        if(parseInt(age.trim()) <= 0){
            let aux = <Modal title="Dados inválidos!" close={closeModal}>
                        <p>Por favor insira uma idade válida (valor maior que 0)</p>
                    </Modal>
            setModal(aux);
            return;
        }

        const id =  Math.random().toString().substr(2, 8) + name 

        const userData = {
            name,
            age,
            id
        }

        props.addUser(userData);
        setName("")
        setAge("")
    }

    const closeModal = () =>{
        setModal(<React.Fragment></React.Fragment>);
    }
    return (
        <React.Fragment>
            {modal}            
            <Card   className={styles.input}> 
                <form  
                    onSubmit={userFormSubmitHandler} 
                    className={styles.userForm}>
                    <label htmlFor="username">Username</label>
                    <input 
                        value={name} 
                        id="username" 
                        type="text" 
                        placeholder="" 
                        onChange={handleUsernameChanged} 
                        ref={usernameInputRef}
                    />
                    <label htmlFor="age">Idade (Anos)</label>
                    <input 
                        value={age} 
                        id="age" 
                        type="number" 
                        placeholder="" 
                        onChange={handleUserAgeChanged}
                        ref={ageInputRef}/>
                    <Button type="submit">Adicionar usuário</Button>
                </form>
            </Card>
        </React.Fragment>
         
    );
}

export default UserForm;