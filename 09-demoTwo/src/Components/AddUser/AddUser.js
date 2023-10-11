import Button from '../Button/Button'
import styles from './AddUser.module.css'
import { useState } from 'react';


const AddUser = ({}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  };

  const [user, setUser] = useState({
    'name': '',
    'age': 0,
  });

  const handleUserInput = (input, value) => {
    setUser((prev)=>{ return {
      ...prev,
      [input]:value,
    }
    })
  };
  
  
  return (<>
    <form onSubmit={handleSubmit}>
      <label className={styles.input} htmlFor='name'>Name</label>
      <input className={styles.input} type='text' id='name' 
        onChange={(e) => handleUserInput('name', e.target.value)}/>

      <label className={styles.input} htmlFor='age'>Age (years)</label>
      <input className={styles.input} type='number' id='age'
        onChange={(e) => handleUserInput('age', e.target.value)}/>
    <Button type='submit'>Add User</Button>
    </form>
    
  </>
  )
  }
export default AddUser