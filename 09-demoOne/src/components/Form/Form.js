import styles from './Form.module.css'
import { useState } from 'react'

const Form = ({calculateHandler}) => {

    const [currentSavings, setCurrentSavings] = useState(0);
    const [yearlyContribution, setYearlyContribution] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [duration, setDuration] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
    };

    const handleReset = () => {
        setCurrentSavings(0);
        setYearlyContribution(0);
        setExpectedReturn(0);
        setDuration(0);
    }

    const handleInputChange = (input, value) => {
        switch(input){
            case 'current-savings':
                setCurrentSavings(value);
                break;
            case 'yearly-contribution':
                setYearlyContribution(value);
                break;
            case 'expected-return':
                setExpectedReturn(value);
                break;
            case 'duration':
                setDuration(value);
                break;
        }
    }

    return (<>
        <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles['input-group']}>
            <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input value={currentSavings} onChange={(e)=> handleInputChange('current-savings', e.target.value)} type="number" id="current-savings" />
            </p>
            <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input value={yearlyContribution} onChange={(e)=> handleInputChange('yearly-contribution', e.target.value)} type="number" id="yearly-contribution" />
            </p>
        </div>
        <div className={styles['input-group']}>
            <p>
                <label htmlFor="expected-return">Expected Interest (%, per year)</label>
                <input value={expectedReturn} onChange={(e)=> handleInputChange('expected-return', e.target.value)} type="number" id="expected-return" />
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input value={duration} onChange={(e)=> handleInputChange('duration', e.target.value)} type="number" id="duration" />
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