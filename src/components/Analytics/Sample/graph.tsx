import React from "react";
import TimeSeriesGraph from "./index";
import {Company, SMA, TimeSeriesPoint} from "../../../data/models";
import {techSMA} from "../../../services/api";

interface GraphProps {
    company: Company;
}

let sma20: TimeSeriesPoint[] = []
let sma200: TimeSeriesPoint[] = []

const Graph: React.FC<GraphProps> = ({company}) => {
    const [smaLst, setSmaLst] = React.useState<SMA[]>([]);

    React.useEffect(() => {
        sma20 = [];
        sma200 = [];
        techSMA(company.symbol).then(chartDataPoints => {
            console.log(chartDataPoints);
            setSmaLst(chartDataPoints);
            chartDataPoints.forEach((chartDataPoint: any) => {
                sma20.push(new TimeSeriesPoint(chartDataPoint.date, chartDataPoint.sma_20));
                sma200.push(new TimeSeriesPoint(chartDataPoint.date, chartDataPoint.sma_200));
            });
        });
    }, [company.symbol]);

    return (
        <>
            <h2>{company.symbol}</h2>
            {sma20 && sma20.length > 0 && (
                <div>
                    <p>
                        <TimeSeriesGraph data={sma20}/>
                        <TimeSeriesGraph data={sma200}/>
                    </p>
                    <h3>Inference</h3>
                    <p>
                        Inference of the graph is that the stock price is in the range of 100 to 200.
                    </p>
                </div>
            )}
        </>
    );
};

export default Graph;

