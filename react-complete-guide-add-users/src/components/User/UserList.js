import UserItem from "./UserItem";
import Card from "../UI/Card";

import "./UserList.css"

function UserList(props) {
    
    function handleDeleteUser(id){
        props.deleteUser(id);
    }

    if(props.users.length === 0)
    return (
        <Card >
            <h2 className="userList__fallback">Nenhum usuário encontrado</h2>
        </Card>
    )

    return ( 
        <Card  className="userList">
            <ul >
                { 
                    props.users.map(user=>
                        (<UserItem 
                            deleteUser={handleDeleteUser}
                            key={user.id}
                            id={user.id}
                            age={user.age}
                            name={user.name}>
                        </UserItem>)
                    )
                }
            </ul>
        </Card>
    );
}

export default UserList;