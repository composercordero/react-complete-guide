import { useState } from 'react';
import AddUser from './Components/AddUser/AddUser';
import UserList from './Components/UserList/UserList';
import ErrorModal from './Components/ErrorModal/ErrorModal';


function App() {
    
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [userList, setUserList] = useState([]);

    const handleUserList = (user) => {
        setUserList((prev)=>{
            return [...prev, user]
        })
    }
    
    return (<>
        {showErrorModal && 
            <ErrorModal 
                title={'Error Message'} 
                content={'Check on your inputs please!'} 
                setShowErrorModal={setShowErrorModal}
            />}
        <AddUser handleUserList={handleUserList} setShowErrorModal={setShowErrorModal} />
        <UserList userList={userList}/>

</>);
}

export default App;
