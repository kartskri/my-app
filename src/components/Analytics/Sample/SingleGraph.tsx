import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {TimeSeriesPoint} from "../../../data/models";

type SingleGraphProps = {
    data: TimeSeriesPoint[];
}

const SingleGraph: React.FC<SingleGraphProps> = ({ data }) => {
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
        }]
    };

    return (
        <ReactEcharts option={options} />
    );
};

export default SingleGraph;
