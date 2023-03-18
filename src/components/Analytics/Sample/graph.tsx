import React from "react";
import TimeSeriesGraph from "./index";
import {Company, SMA, TimeSeriesPoint} from "../../../data/models";
import {techSMA} from "../../../services/api";

interface GraphProps {
    company: Company;
}

let data: TimeSeriesPoint[] = []

const Graph: React.FC<GraphProps> = ({company}) => {
    const [smaLst, setSmaLst] = React.useState<SMA[]>([]);

    React.useEffect(() => {
            data = [];
            techSMA(company.symbol).then(dataPoint => {
                console.log(dataPoint);
                setSmaLst(dataPoint);
                dataPoint.forEach((chartDataPoint: any) => {
                    data.push(new TimeSeriesPoint(chartDataPoint.date, chartDataPoint.sma_20));
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

