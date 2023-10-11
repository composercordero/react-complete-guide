import styles from './Table.module.css'
import { useState } from 'react'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
})

const Table = ({displayData, initialInvestment}) => {
    
    const tableHeaders = ['Year', 'Total Savings', 'Interest (Year)', 'Total Interest', 'Invested Capital'
    ]
    return (<>
    {!displayData && <p className={styles.noInvestment}>No investment calculated yet</p>}
    {displayData &&
        <table className={styles.result}>
            <thead>
                <tr>
                    {tableHeaders.map((header) => <th key={header}>{header}</th> )}
                </tr>
            </thead>
                    <tbody>
                    {displayData.map((data) => (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.savingsEndOfYear)}</td>
                            <td>{formatter.format(data.yearlyInterest)}</td>
                            <td>{formatter.format(data.savingsEndOfYear - initialInvestment - data.yearlyContribution * data.year)}</td>
                            <td>{formatter.format(initialInvestment + data.yearlyContribution * data.year)}</td>
                        </tr>
                    ))}
            </tbody>
        </table>}
    </>
    )
}
export default Table