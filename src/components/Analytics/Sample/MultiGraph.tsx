import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {Company, TimeSeriesPoint} from "../../../data/models";
import {INIT_CHART_OPTIONS} from "../../../services/constants";

type DataPoint = {
    date: string;
    value: number;
}

type MultiGraphProps = {
    company: Company;
    data: TimeSeriesPoint[][];
}

const MultiGraph: React.FC<MultiGraphProps> = ({company, data}) => {
    const [loading, setLoading] = React.useState<any>(true);
    const [chartSeries, setChartSeries] = React.useState<any>([]);
    const [option, setOption] = React.useState<any>(null);


    React.useEffect(() => {
        async function populateSeries() {
            let seriesLst: any[] = [];
            data.map((timeSeriesPoints: TimeSeriesPoint[]) => {
                seriesLst.push({
                    "type": "line",
                    "data": timeSeriesPoints.map((point: TimeSeriesPoint) => [point.date, point.value]),
                    "showSymbol": false,
                    "hoverAnimation": false,
                    "lineStyle": {
                        "width": 1
                    }
                });
            });
            return seriesLst;
        }

        populateSeries().then((sdata) => {
            setLoading(true);
            setChartSeries([])
            setChartSeries(sdata);
            let dummyOption = INIT_CHART_OPTIONS;
            dummyOption.series = sdata;
            setOption(dummyOption);
            setLoading(false);
        });
    }, [company.symbol, data, loading]);


    return (
        <>
            {option && option.series && (
                <ReactEcharts option={option}/>
            )}
        </>
    );
}

export default MultiGraph;
