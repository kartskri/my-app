import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {ChartData} from "../../../data/models";

type DataPoint = {
    date: string;
    value: number;
}

type TimeSeriesGraphProps = {
    data: ChartData[];
}

const TimeSeriesGraph: React.FC<TimeSeriesGraphProps> = ({ data }) => {
    console.log('Inside TimeSeriesGraph' + data.length);
    const options = {
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
        series: [{
            type: 'line',
            data: data.map((point) => [point.date, point.value]),
            showSymbol: false,
            hoverAnimation: false,
            lineStyle: {
                width: 1
            }
        }, {
            type: 'line',
            data: data.map((point) => [point.date, point.value+10]),
            showSymbol: false,
            hoverAnimation: false,
            lineStyle: {
                width: 1
            }
        }]
    };

    return (
        <ReactEcharts option={options} />
    );
};

export default TimeSeriesGraph;
