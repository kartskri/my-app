import axios, {AxiosResponse} from 'axios';
import {SMA, Stock, StockOverview} from "../data/models";
import {API_URL} from "../constants";

export const fetchStocks = async (): Promise<Stock[]> => {
    const response: AxiosResponse<Stock[]> = await axios.get(API_URL + '/stocks');
    return response.data;
}

export const fetchStock = async (symbol: string): Promise<Stock> => {
    const response: AxiosResponse<Stock> = await axios.get(API_URL + '/stock/' + symbol);
    return response.data;
}

export const fetchStockOverview = async (symbol: string): Promise<StockOverview> => {
    const response: AxiosResponse<StockOverview> = await axios.get(API_URL + '/stock/' + symbol + '/overview');
    return response.data;
}

export const techSMA = async (symbol: string): Promise<SMA[]> => {
    const response: AxiosResponse<SMA[]> = await axios.get(API_URL + '/tech/' + symbol + '/sma');
    return response.data;
}

export const techSMAChartData = async (symbol: string): Promise<SMA[]> => {
    const response: AxiosResponse<SMA[]> = await axios.get(API_URL + '/tech/' + symbol + '/sma');
    return response.data;
}
