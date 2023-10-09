import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import './Expenses.css'
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {
    
    const [selectedDate, setSelectedDate] = useState('2020');
    
    const filteredExpenses = props.expenses.filter((expense)=>{
        return expense.date.getFullYear().toString() === selectedDate});

    const handleFilterDate = (date) => {
        setSelectedDate(date)
    };
    
    return (<>
        <Card className='expenses'>
            <ExpenseFilter onSelectDate = {handleFilterDate} selectedDate = {selectedDate}/>
            <ExpensesChart expenses = {filteredExpenses}/>
            <ExpensesList expenses = {filteredExpenses} />
            {}
        </Card>
    </>
    )
    }
export default Expenses