import React, {useState} from 'react';

import './App.css';
import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";

function App() {
  
  const [users, setUsers] = useState([]); 
  const addUserHandler = (user)=>{
   

    setUsers(lastUsers => {
      return [user, ...lastUsers]
    })
  }

  const deleteUserHandler = (id) =>{
    setUsers(lastUsers => {
      let aux = lastUsers.filter(x=>x.id !== id);
      return aux;
    })
  }


  return (
    <div className="App">
      <UserForm  addUser={addUserHandler}/>
      <UserList users={users} deleteUser={deleteUserHandler}/>
    </div>
  );
}

export default App;
