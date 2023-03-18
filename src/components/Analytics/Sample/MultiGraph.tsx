import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {TimeSeriesPoint} from "../../../data/models";
import {INIT_CHART_OPTIONS} from "../../../services/constants";

type DataPoint = {
    date: string;
    value: number;
}

type MultiGraphProps = {
    data: TimeSeriesPoint[][];
}

const MultiGraph: React.FC<MultiGraphProps> = ({data}) => {
    const [seriesPop, setSeriesPop] = React.useState<boolean>(false);
    const [option, setOption] = React.useState<any>(INIT_CHART_OPTIONS);


    React.useEffect(() => {
        async function populateSeries() {
            data.map((timeSeriesPoints: TimeSeriesPoint[]) => {
                option.series.push({
                    "type": "line",
                    "data": timeSeriesPoints.map((point: TimeSeriesPoint) => [point.date, point.value]),
                    "showSymbol": false,
                    "hoverAnimation": false,
                    "lineStyle": {
                        "width": 1
                    }
                });
            });
        }

        populateSeries().then(() => {
            console.log("Populating series");
            setSeriesPop(true);
            console.log("Populating series Done");
            console.log("options.series: ", JSON.stringify(option.series));
        });
    });


    return (
        <>
            {seriesPop && option.series.length > 0 && (
                <ReactEcharts option={option}/>
            )}
        </>
    );
}

export default MultiGraph;
