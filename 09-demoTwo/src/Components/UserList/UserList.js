import styles from './UserList.module.css'
import Card from '../Card/Card'

const UserList = ({userList}) => {
  return (<>
    <Card className={styles.users}>
    
      <ul>
        {userList.length == 0 && <li>Add some users!</li>}
        {userList.map((user)=>{ 
          return (
          <li key={user.id}>
            Name: {user.name}| Age: {user.age}
          </li>)
        })}
      </ul>
    </Card>
  
  </>
  )
}
export default UserList