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
            <ExpenseForm onSaveExpenseData = {handleSaveExpenseData} />
        </div>
    
    </>)
}

export default NewExpense