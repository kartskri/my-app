import React, {useState} from "react";
import TimeSeriesGraph from "./index";
import axios from "axios";
import {ChartData, Company, SMA, Stock} from "../../../data/models";
import {API_URL} from "../../../constants";

interface GraphProps {
    company: Company;
}

let data: any[] = []
let apiUrl = '';

const Graph: React.FC<GraphProps> = ({company}) => {
    const [smaLst, setSmaLst] = React.useState<SMA[]>([]);


    React.useEffect(() => {
            async function fetchSMAData(symbol: string) {
                try {
                    apiUrl = API_URL + '/lobster/sma/' + symbol;
                    const response = await axios.get<SMA[]>(apiUrl);
                    setSmaLst(response.data);
                    for (let i = 0; i < response.data.length; i++) {
                        let temp = response.data[i]
                        if (i == 0) {
                            data = []
                        }
                        data.push(new ChartData(temp.date, temp.sma_20))
                    }
                    return response.data;
                } catch (error) {
                    console.error(error);
                }
            }

            fetchSMAData(company.symbol).then(r => {
                console.log(data.length)
            });
        },
        [company.symbol]);

    return (
        <>
            <h2>{company.symbol} - {apiUrl}</h2>
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

