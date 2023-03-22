import React, {useState} from "react";
import {stockQuote} from "../../services/api";
import {StockQuote} from "../../data/models";

interface StockQuoteProps {
    symbol: string;
}

const Quote: React.FC<StockQuoteProps> = ({symbol}) => {
    const [quotes, setQuotes] = useState<StockQuote[]>();

    React.useEffect(() => {
        stockQuote(symbol).then(data => {
            console.log(data);
            setQuotes(data);
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