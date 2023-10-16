import Button from '../Button/Button'
import Card from '../Card/Card';
import styles from './AddUser.module.css'
import { useState, useRef } from 'react';
import ErrorModal from '../ErrorModal/ErrorModal'

const initialUserState = {
  'name': '',
  'age': '',
  'id': Math.random().toString(),
}

const AddUser = ({handleUserList}) => {
  
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      'id': Math.random().toString(),
      'name': nameInputRef.current.value,
      'age':ageInputRef.current.value
    }
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title:'Invalid Input',
        content: 'Please enter a valid name and age.'
      });
      return;
    }
    if (+enteredAge < 1){
      setError({
        title:'Invalid Input',
        content: 'Please enter a valid age.'
      });      
      return;
    }
    handleUserList(user)
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
        <input type='text' id='name'
          ref = {nameInputRef}/>

        <label  htmlFor='age'>Age (years)</label>
        <input type='number' id='age'
          ref = {ageInputRef}/>

      <Button type={'submit'}>Add User</Button>

      </form>
    </Card>
  </>
  )
  }
export default AddUser