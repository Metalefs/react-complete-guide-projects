import React, {useState} from 'react';

import './App.css';
import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";
import Card from "./components/UI/Card"
import Modal from './components/UI/Modal';

function App() {
  
  const [users, setUsers] = useState([]); 
  const [modal, setModal] = useState(<div></div>);
    
  const addUserHandler = (user)=>{
    if(user.name.trim().length === 0 || user.age.trim().length === 0){
      let aux = <Modal title="Dados inválidos" close={closeModal}>
                <p>Por favor insira um nome e idade (valor não vazio)</p>
              </Modal>
      setModal(aux);
      return;
    }
    if(parseInt(user.age.trim()) <= 0){
      let aux = <Modal title="Dados inválidos" close={closeModal}>
                <p>Por favor insira uma idade válida (valor maior que 0)</p>
              </Modal>
      setModal(aux);
      return;
    }

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

  const closeModal = () =>{
    setModal(<div></div>);
  }

  return (
    <div className="App">
      {modal}
      <Card>
        <UserForm  addUser={addUserHandler}/>
      </Card>
      <Card>
        <UserList users={users} deleteUser={deleteUserHandler}/>
      </Card>
    </div>
  );
}

export default App;
