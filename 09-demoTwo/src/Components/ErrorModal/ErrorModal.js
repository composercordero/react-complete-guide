import Button from '../Button/Button'
import Card from '../Card/Card'
import styles from './ErrorModal.module.css'


const ErrorModal = ({title, content, setShowErrorModal}) => {
return (<>

    <Card className={styles.backdrop}>
        <div className={styles.modal}>
            <div className={styles.header}>
                <h2>{title}</h2>
            </div>
            <div className={styles.content}>
                <p>{content}</p>
            </div>
            <div className={styles.actions}>
                <Button onClick={() =>  setShowErrorModal(false)}>Confirm</Button>
            </div>
        </div>
    </Card>

</>)
}
export default ErrorModal