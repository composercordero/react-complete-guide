import './ExpenseForm.css'
import { useState } from 'react';

const ExpenseForm = (props) => {

    // Example of using just one state

    // const [inputForm, setInputForm] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    // const handletitleChange = (e) => {
    //     setInputForm((prevState) => {
    //         return {...prevState, enteredTitle: e.target.value}
    //     });

    const [inputTitle, setInputTitle ] = useState('');
    const [inputAmount, setInputAmount ] = useState('');
    const [inputDate, setInputDate ] = useState('');


    const handleTitleChange = (e) => {
        setInputTitle(e.target.value)
    };

    const handleAmountChange = (e) => {
        setInputAmount(e.target.value)
    };
    
    const handleDateChange = (e) => {
        setInputDate(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const expenseData = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)
        };

        props.onSaveExpenseData(expenseData);
        
        setInputTitle('');
        setInputAmount('');
        setInputDate('');
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={inputTitle} onChange={handleTitleChange} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'  value={inputAmount} min='0.01' step='0.01' onChange={handleAmountChange}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date'  value={inputDate} min='2019-01-01' step='2022-13-31' onChange={handleDateChange}/>
                </div>

            </div>
                <div className='new-expense__actions'>
                    <button onClick={()=>props.setFormVisibility('hide')}>Cancel</button>
                    <button>Add Expense</button>
                </div>
        </form>
    </>)
}
export default ExpenseForm