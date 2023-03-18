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
        series: data.map((timeSeriesPoints: TimeSeriesPoint[]) => {
            return {
                type: 'line',
                data: timeSeriesPoints.map((point: TimeSeriesPoint) => [point.date, point.value]),
                showSymbol: false,
                hoverAnimation: false,
                lineStyle: {
                    width: 1
                }
            }
        })
    };

    console.log(options);

    return (
        <ReactEcharts option={options} />
    );

};

export default MultiGraph;
