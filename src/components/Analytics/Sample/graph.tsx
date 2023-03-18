import React from "react";
import TimeSeriesGraph from "./index";
import {ChartData, Company, SMA} from "../../../data/models";
import {techSMA} from "../../../services/api";

interface GraphProps {
    company: Company;
}

let data: ChartData[] = []

const Graph: React.FC<GraphProps> = ({company}) => {
    const [smaLst, setSmaLst] = React.useState<SMA[]>([]);

    React.useEffect(() => {
            data = [];
            techSMA(company.symbol).then(chartDataPoints => {
                console.log(chartDataPoints);
                setSmaLst(chartDataPoints);
                chartDataPoints.forEach((chartDataPoint: any) => {
                    data.push(new ChartData(chartDataPoint.date, chartDataPoint.sma_20));
                });
            });
        }, [company.symbol]);

    return (
        <>
            <h2>{company.symbol}</h2>
            {data && data.length > 0 && (
                <div>
                    <p>
                        <TimeSeriesGraph data={data}/>
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

