    import Form from './components/Form/Form';
    import Header from './components/Header/Header';
    import Table from './components/Table/Table';
    import { useState } from 'react';

    function App() {
    
        const [displayData, setDisplayData] = useState([]);
        const [totalInterest, setTotalInterest] = useState(0);

        const calculateHandler = (userInput) => {
        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...

        const yearlyData = []; // per-year results

        let currentSavings = +userInput['current-savings'];
        const yearlyContribution = +userInput['yearly-contribution']; 
        const expectedReturn = +userInput['expected-return'] / 100;
        const duration = +userInput['duration'];

        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        setTotalInterest(prev => yearlyInterest + prev)
        yearlyData.push({
            year: i + 1,
            yearlyInterest: yearlyInterest,
            totalInterest: totalInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution,
        });
        }
    };

    return (<>
        <Header />
        <Form calculateHandler = {calculateHandler}/>
        {/* Todo: Show below table conditionally (only once result data is available) */}
        {/* Show fallback text if no data is available */}
        <Table displayData={displayData}/>
        </>
    );
    }

    export default App;
