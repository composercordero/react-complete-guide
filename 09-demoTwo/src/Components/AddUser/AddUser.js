import Button from '../Button/Button'
import Card from '../Card/Card';
import styles from './AddUser.module.css'
import { useState } from 'react';

const initialUserState = {
  'name': '',
  'age': '',
  'id': Math.random().toString(),
}

const AddUser = ({handleUserList, setShowErrorModal}) => {
  
  const [user, setUser] = useState(initialUserState);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.name.trim().length === 0 || user.age.trim().length === 0){
      setShowErrorModal(true);
      return;
    }
    if (+user.age < 1){
      setShowErrorModal(true);
      return;
    }
    handleUserList(user)
    setUser(initialUserState)
  };

  const handleUserInput = (input, value) => {
    setUser((prev)=>{ return {
      ...prev,
      'id': Math.random().toString(),
      [input]:value,
    }
    })
  };
  
  return (<>
    <Card className={styles.input}>
      <form onSubmit={handleSubmit}>

        <label htmlFor='name'>Name</label>
        <input type='text' id='name' value={user.name}
          onChange={(e) => handleUserInput('name', e.target.value)}/>

        <label  htmlFor='age'>Age (years)</label>
        <input type='number' id='age' value={user.age}
          onChange={(e) => handleUserInput('age', e.target.value)}/>

      <Button type={'submit'}>Add User</Button>

      </form>
    </Card>
  </>
  )
  }
export default AddUser