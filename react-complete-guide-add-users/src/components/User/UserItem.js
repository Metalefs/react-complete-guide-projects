import styles from "./UserItem.module.css";


function UserItem(props) {

    function handleDeleteUser(){
        props.deleteUser(props.id)
    }

    return (
        <li className={styles.userItem} onClick={handleDeleteUser}>
            {props.name} ({props.age} anos)
        </li> 
    );
}

export default UserItem;