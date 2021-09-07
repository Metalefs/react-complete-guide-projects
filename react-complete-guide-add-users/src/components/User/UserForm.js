import React, {useState} from 'react';
import styles from "./UserForm.module.css"

import Button from "../UI/Button";

function UserForm(props) {

    const [name,setName] = useState('')
    const [age,setAge] = useState('')

    function handleUsernameChanged(event){
        setName(event.target.value)
    }
    function handleUserAgeChanged(event){
        setAge(event.target.value)
    }

    function userFormSubmitHandler(event){
        event.preventDefault();

        const id =  Math.random().toString().substr(2, 8) + name 

        const userData = {
            name,
            age,
            id
        }

        props.addUser(userData);
    }

    return (
        <form 
            onSubmit={userFormSubmitHandler} 
            className={styles.userForm}>
            <div className={styles.formGroup}>
                <label>Username</label>
                <input type="text" placeholder="" onChange={handleUsernameChanged}/>
            </div>
            <div className={styles.formGroup}>
                <label>Idade (Anos)</label>
                <input type="number" placeholder="" onChange={handleUserAgeChanged}/>
                <Button type="submit">Adicionar usuário</Button>
            </div>
        </form>
    );
}

export default UserForm;