import styles from './Table.module.css'
import { useState } from 'react'

const Table = ({displayData}) => {
    

    const tableHeaders = ['Year', 'Total Savings', 'Interest (Year)', 'Total Interest', 'Invested Capital'
    ]
    return (<>
        <table className={styles.result}>
            <thead>
                <tr>
                    {tableHeaders.map((header) => <th key={header}>{header}</th> )}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {displayData.map((data) => {
                    return <>
                    <td>{data.year}</td>
                    <td>{data.savingsEndOfYear}</td>
                    <td>{data.yearlyInterest}</td>
                    <td>{data.totalInterest}</td>
                    <td>{data.yearlyContribution}</td>
                    </>})}
                </tr>
            </tbody>
        </table>
    </>
    )
}
export default Table