    import Form from './components/Form/Form';
    import Header from './components/Header/Header';
    import Table from './components/Table/Table';
    import { useState } from 'react';

    function App() {
    
        const [displayData, setDisplayData] = useState(null);
        const [initialInvestment, setInitialInvestment] = useState(0);

        const handleCalculate = (userCurrentSavings, userYearlyContribution, userExpectedReturn, userDuration) => {
        
        setInitialInvestment(userCurrentSavings);
        const yearlyData = [];

        let currentSavings = +userCurrentSavings;
        const yearlyContribution = +userYearlyContribution; 
        const expectedReturn = +userExpectedReturn / 100;
        const duration = +userDuration;

        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution,
        });

        setDisplayData(yearlyData);
        }
    };

    return (<>
        <Header />
        <Form handleCalculate = {handleCalculate}/>
        <Table displayData={displayData} initialInvestment={initialInvestment}/>
        </>
    );
    }

    export default App;
