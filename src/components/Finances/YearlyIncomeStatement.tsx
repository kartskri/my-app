import React from "react";
import {yearlyIncomeStatements} from "../../services/api";
import {IncomeStatement} from "../../data/models";

interface IncomeStatementProps {
    symbol: string;
}

const YearlyIncomeStatement: React.FC<IncomeStatementProps> = ({symbol}) => {
    const [incomeStatements, setIncomeStatements] = React.useState<IncomeStatement[]>();
    React.useEffect(() => {
        yearlyIncomeStatements(symbol).then((data) => {
            setIncomeStatements(data);
        });
    }, [symbol]);

    return <>
        <h2>Yearly</h2>
        {incomeStatements && (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Revenue</th>
                    <th scope="col">Cost of Revenue</th>
                    <th scope="col">Gross Profit</th>
                    <th scope="col">R&D Expenses</th>
                    <th scope="col">SG&A Expense</th>
                    <th scope="col">Operating Expenses</th>
                    <th scope="col">Operating Income</th>
                    <th scope="col">Interest Expense</th>
                    <th scope="col">Earnings before Tax</th>
                    <th scope="col">Income Tax Expense</th>
                    <th scope="col">Net Income - Non-Controlling int</th>
                    <th scope="col">Net Income - Discontinued ops</th>
                    <th scope="col">Net Income</th>
                    <th scope="col">Preferred Dividends</th>
                    <th scope="col">Net Income Com</th>
                    <th scope="col">EPS</th>
                    <th scope="col">EPS Diluted</th>
                    <th scope="col">Weighted Average Shs Out</th>
                    <th scope="col">Weighted Average Shs Out (Dil)</th>
                    <th scope="col">Dividend per Share</th>
                    <th scope="col">Gross Margin</th>
                    <th scope="col">EBITDA Margin</th>
                    <th scope="col">EBIT Margin</th>
                    <th scope="col">Profit Margin</th>
                    <th scope="col">Free Cash Flow margin</th>
                    <th scope="col">EBITDA</th>
                    <th scope="col">EBIT</th>
                    <th scope="col">Consolidated Income</th>
                    <th scope="col">Earnings Before Tax Margin</th>
                    <th scope="col">Net Profit Margin</th>
                </tr>
                </thead>
                <tbody>
                {incomeStatements && incomeStatements.map((incomeStatement) => (
                    <tr key={incomeStatement.fiscal_date_ending}>
                        <td>{incomeStatement.fiscal_date_ending}</td>
                        <td>{incomeStatement.comprehensive_income_net_of_tax}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        )}
    </>;
}

export default YearlyIncomeStatement;