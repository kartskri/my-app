import React from "react";
import TimeSeriesGraph from "./index";
import {Company, GraphData, SMA} from "../../../data/models";
import {techSMAChartData} from "../../../services/api";

interface GraphProps {
    symbol: string;
    company: Company;
}

let data: GraphData[] = []

const Graph: React.FC<GraphProps> = ({symbol, company}) => {
    // const [gdata, setGdata] = React.useState<GraphData[]>([]);

    React.useEffect(() => {
        techSMAChartData(symbol, 'line').then(graphData => {
            data = graphData;
            console.log(graphData);
            // setGdata(graphData);
            // console.log(gdata);
        });
    }, [symbol]);

    return (
        <>
            <h2>{company.company}</h2>
            {data && data.length > 0 && (
                <div>
                    <TimeSeriesGraph data={data[0].dataPoints} />
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

