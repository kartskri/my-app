import React from "react";
import TimeSeriesGraph from "./index";
import {Company, GraphData, SMA} from "../../../data/models";
import {techSMAChartData} from "../../../services/api";

interface GraphProps {
    company: Company;
}

let data: GraphData[] = []

const Graph: React.FC<GraphProps> = ({company}) => {
    const [dataLoaded, setDataLoaded] = React.useState<boolean>(false);

    React.useEffect(() => {
        data = [];
        alert(company.symbol  + ' ' + dataLoaded);
        techSMAChartData(company.symbol, 'line').then(graphData => {
            data = graphData;
            setDataLoaded(true);
            alert(dataLoaded)
        });
    }, [company.symbol]);

    return (
        <>
            <h2>{company.symbol}</h2>
            {dataLoaded && data && data.length > 0 && (
                <div>
                    <p>
                        <TimeSeriesGraph graphData={data} />
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

