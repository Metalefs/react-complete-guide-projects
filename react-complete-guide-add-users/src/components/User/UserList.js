import UserItem from "./UserItem";
import Card from "../UI/Card";

function UserList(props) {
    
    function handleDeleteUser(id){
        props.deleteUser(id);
    }

    if(props.users.length === 0)
    return (
        <h2>Nenhum usuário encontrado</h2>
    )

    return ( 
        props.users.map(user=>(<UserItem deleteUser={handleDeleteUser} key={user.id} id={user.id} age={user.age} name={user.name}></UserItem>))
    );
}

export default UserList;