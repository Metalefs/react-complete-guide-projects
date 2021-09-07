import styles from "./UserItem.module.css";


function UserItem(props) {

    function handleDeleteUser(){
        props.deleteUser(props.id)
    }

    return (
        <div className={styles.userItem} onClick={handleDeleteUser}>
            <div className={styles.userItem__inner}>
                {props.name} ({props.age} anos)
            </div>
        </div> 
    );
}

export default UserItem;