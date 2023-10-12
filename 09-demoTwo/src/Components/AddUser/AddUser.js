import Button from '../Button/Button'
import Card from '../Card/Card';
import styles from './AddUser.module.css'
import { useState } from 'react';
import ErrorModal from '../ErrorModal/ErrorModal'

const initialUserState = {
  'name': '',
  'age': '',
  'id': Math.random().toString(),
}

const AddUser = ({handleUserList}) => {
  
  const [user, setUser] = useState(initialUserState);
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.name.trim().length === 0 || user.age.trim().length === 0){
      setError({
        title:'Invalid Input',
        content: 'Please enter a valid name and age.'
      });
      return;
    }
    if (+user.age < 1){
      setError({
        title:'Invalid Input',
        content: 'Please enter a valid age.'
      });      
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

  const handleError = () => {
    setError(null);
  }
  
  return (<>
    {error && 
      <ErrorModal 
          title={error.title} 
          content={error.content}
          handleError={handleError} 
      />}
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