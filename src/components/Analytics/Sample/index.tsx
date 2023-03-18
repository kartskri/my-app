import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {GraphData, TimeSeriesPoint} from "../../../data/models";

type DataPoint = {
    date: string;
    value: number;
}

type TimeSeriesGraphProps = {
    graphData: GraphData[];
}

const TimeSeriesGraph: React.FC<TimeSeriesGraphProps> = ({ graphData }) => {
    let options = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: false
            }
        },
        series: [] as any[]
    };

    graphData.forEach((graphDataPoint: GraphData) => {
        let temp_series: any = {
            "type": graphDataPoint.chartType,
            "data": graphDataPoint.dataPoints.map((point: TimeSeriesPoint) => [point.date, point.value]),
            "showSymbol": false,
            "hoverAnimation": false,
            "lineStyle": {
                "width": 1
            }
        };
        options.series.push(temp_series)
    });

    return (
        <ReactEcharts option={options} />
    );
};

export default TimeSeriesGraph;
