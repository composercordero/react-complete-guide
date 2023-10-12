import { useState } from 'react';
import AddUser from './Components/AddUser/AddUser';
import UserList from './Components/UserList/UserList';


function App() {
    
    const [userList, setUserList] = useState([]);

    const handleUserList = (user) => {
        setUserList((prev)=>{
            return [...prev, user]
        })
    }
    
    return (<>
        <AddUser handleUserList={handleUserList}/>
        <UserList userList={userList}/>

</>);
}

export default App;
