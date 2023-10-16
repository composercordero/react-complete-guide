import ReactDOM from 'react-dom'
import Button from '../Button/Button'
import Card from '../Card/Card'
import styles from './ErrorModal.module.css'

const Backdrop = ({handleError}) => {
    return <div className={styles.backdrop} onClick={handleError}></div>
}

const ModalOverlay = ({title, content, handleError}) => {
    return  (
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
        )
}

const ErrorModal = ({title, content, handleError}) => {
return (<>
    {ReactDOM.createPortal(<Backdrop handleError={handleError} />, document.getElementById('backdrop-root') ) }
    {ReactDOM.createPortal(<ModalOverlay title={title} content ={content} handleError={handleError} />, document.getElementById('overlay-root') ) }
</>)
}
export default ErrorModal