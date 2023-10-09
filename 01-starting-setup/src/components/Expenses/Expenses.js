import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import './Expenses.css'


const Expenses = (props) => {
    
    const [selectedDate, setSelectedDate] = useState('2020');
    
    const handleFilterDate = (date) => {
        setSelectedDate(date)
    };
    
    return (<>
        <Card className='expenses'>
            <ExpenseFilter onSelectDate = {handleFilterDate} selectedDate = {selectedDate}/>
            {props.expenses.map((expense, i)=>(
                <ExpenseItem key={i} title={expense.title} amount={expense.amount} date={expense.date}/>
        ))}
        </Card>
    </>
    )
    }
export default Expenses