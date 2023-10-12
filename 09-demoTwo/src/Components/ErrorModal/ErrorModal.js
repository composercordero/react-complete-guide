import Button from '../Button/Button'
import Card from '../Card/Card'
import styles from './ErrorModal.module.css'


const ErrorModal = ({title, content, handleError}) => {
return (<>

    <div className={styles.backdrop} onClick={handleError}>
        <Card className={styles.modal}>
            <div className={styles.header}>
                <h2>{title}</h2>
            </div>
            <div className={styles.content}>
                <p>{content}</p>
            </div>
            <div className={styles.actions}>
                <Button onClick={handleError}>Confirm</Button>
            </div>
        </Card>
    </div>

</>)
}
export default ErrorModal