import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const handleSaveExpenseData = (inputExpenseData) => {
        const expenseData = {
            ...inputExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData)
        props.onAddExpense(expenseData)
    }


    return(<>
        <div className='new-expense'>
            {props.formVisibility === 'hide' ? 
            <button onClick={()=> props.setFormVisibility('show')}>Add New Expense</button> :
            <ExpenseForm onSaveExpenseData = {handleSaveExpenseData} setFormVisibility={props.setFormVisibility}/>}
        </div>
    
    </>)
}

export default NewExpense