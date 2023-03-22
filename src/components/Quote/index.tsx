import React, {useState} from "react";
import {stockQuote, stockQuoteChartData} from "../../services/api";
import {StockQuote, TimeSeriesPoint} from "../../data/models";

interface StockQuoteProps {
    symbol: string;
}

const Quote: React.FC<StockQuoteProps> = ({symbol}) => {
    const [quotes, setQuotes] = useState<StockQuote[]>();

    React.useEffect(() => {
        stockQuote(symbol).then(data => {
            setQuotes(data);
        });

        stockQuoteChartData(symbol).then((points: TimeSeriesPoint[][]) => {

        });
    }, [symbol]);

    return (
        <>
            {quotes && quotes.map((q: StockQuote) => (
                <div>
                    <p>{q.adjusted_close}</p>
                </div>
            ))}
        </>
    )
}


export default Quote;