import styles from './Form.module.css'

const Form = ({calculateHandler}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
    };

    const handleReset = () => {
        console.log('reset')
    }

    return (<>
        <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles['input-group']}>
            <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input type="number" id="current-savings" />
            </p>
            <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input type="number" id="yearly-contribution" />
            </p>
        </div>
        <div className={styles['input-group']}>
            <p>
                <label htmlFor="expected-return">Expected Interest (%, per year)</label>
                <input type="number" id="expected-return" />
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input type="number" id="duration" />
            </p>
        </div>
        <p className={styles.actions}>
            <button onClick={handleReset} type="reset" className={styles.buttonAlt}>
                Reset
            </button>
            <button type="submit" className={styles.button}>
                Calculate
            </button>
        </p>
        </form>
    
    </>)
}
export default Form