import React from "react";
import SingleGraph from "./SingleGraph";
import {Company, SMA, TimeSeriesPoint} from "../../../data/models";
import {techSMA, techSMAChartData} from "../../../services/api";
import MultiGraph from "./MultiGraph";

interface GraphProps {
    company: Company;
}

let sma20: TimeSeriesPoint[] = []
let sma200: TimeSeriesPoint[] = []

const Graph: React.FC<GraphProps> = ({company}) => {
    const [smaLst, setSmaLst] = React.useState<SMA[]>([]);
    const [smaChartData, setSmaChartData] = React.useState<TimeSeriesPoint[][]>([[], []]);

    React.useEffect(() => {
        sma20 = [];
        sma200 = [];
        techSMAChartData(company.symbol, 'line').then(graphData => {
            setSmaChartData(graphData);
            graphData[0].forEach((chartDataPoint: TimeSeriesPoint) => {
                sma20.push(new TimeSeriesPoint(chartDataPoint.date, chartDataPoint.value));
            });
            graphData[1].forEach((chartDataPoint: TimeSeriesPoint) => {
                sma200.push(new TimeSeriesPoint(chartDataPoint.date, chartDataPoint.value));
            });
        });


    }, [company.symbol]);

    return (
        <>
            <h2>{company.symbol}</h2>
            {sma20.length > 0 && sma200.length > 0 && (
                <div>
                    <p>
                        <SingleGraph data={sma20}/>
                        <MultiGraph data={[sma20, sma200]}/>
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

