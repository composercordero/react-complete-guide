import { useState } from 'react';
import AddUser from './Components/AddUser/AddUser';
import UserList from './Components/UserList/UserList';
import ErrorModal from './Components/ErrorModal/ErrorModal';


function App() {
    
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [userList, setUserList] = useState(null);
    
    return (<>
        {showErrorModal && <ErrorModal />}
        <AddUser />
        {!userList && <p>Add some users!</p>}
        {userList && <UserList />}

</>);
}

export default App;
