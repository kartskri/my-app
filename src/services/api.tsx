import axios, {AxiosResponse} from 'axios';
import {
    Bollinger,
    Exponential,
    IncomeStatement,
    RSI,
    SMA,
    Stock,
    StockOverview,
    StockQuote,
    TimeSeriesPoint
} from "../data/models";
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

export const techSMAChartData = async (symbol: string, chartType: string): Promise<TimeSeriesPoint[][]> => {
    let graphData: TimeSeriesPoint[][] = [[], []];
    return techSMA(symbol).then((dataPoint: SMA[]) => {
        dataPoint.forEach((chartDataPoint: SMA) => {
            graphData[0].push(new TimeSeriesPoint(chartDataPoint.date, chartDataPoint.sma_20));
            graphData[1].push(new TimeSeriesPoint(chartDataPoint.date, chartDataPoint.sma_200));
        });
        return graphData;
    });
}

export const techBollinger = async (symbol: string): Promise<Bollinger[]> => {
    const response: AxiosResponse<Bollinger[]> = await axios.get(API_URL + '/tech/' + symbol + '/bollinger');
    return response.data;
}

export const techBollingerChartData = async (symbol: string): Promise<TimeSeriesPoint[][]> => {
    let graphData: TimeSeriesPoint[][] = [[], []];
    return techBollinger(symbol).then((dataPoint: Bollinger[]) => {
        dataPoint.forEach((chartDataPoint: Bollinger) => {
            graphData[0].push(new TimeSeriesPoint(chartDataPoint.date, chartDataPoint.bollingerUpper));
            graphData[1].push(new TimeSeriesPoint(chartDataPoint.date, chartDataPoint.bollingerLower));
        });
        return graphData;
    });
}

export const techExponential = async (symbol: string): Promise<Exponential[]> => {
    const response: AxiosResponse<Exponential[]> = await axios.get(API_URL + '/tech/' + symbol + '/exponential');
    return response.data;
}

export const techExponentialChartData = async (symbol: string): Promise<TimeSeriesPoint[][]> => {
    let graphData: TimeSeriesPoint[][] = [[], [], []];
    return techExponential(symbol).then((dataPoint: Exponential[]) => {
        dataPoint.forEach((chartDataPoint: Exponential) => {
            graphData[0].push(new TimeSeriesPoint(chartDataPoint.date, chartDataPoint.ema_20));
            graphData[1].push(new TimeSeriesPoint(chartDataPoint.date, chartDataPoint.ema_200));
            graphData[2].push(new TimeSeriesPoint(chartDataPoint.date, chartDataPoint.cum_ma));
        });
        return graphData;
    });
}

export const techRSA = async (symbol: string): Promise<RSI[]> => {
    const response: AxiosResponse<RSI[]> = await axios.get(API_URL + '/tech/' + symbol + '/rsi');
    return response.data;
}

export const techRSAChartData = async (symbol: string): Promise<TimeSeriesPoint[][]> => {
    let graphData: TimeSeriesPoint[][] = [[]];
    return techRSA(symbol).then((dataPoint: RSI[]) => {
        dataPoint.forEach((chartDataPoint: RSI) => {
            graphData[0].push(new TimeSeriesPoint(chartDataPoint.date, chartDataPoint.rsi));
        });
        return graphData;
    });
}

export const stockQuote = async (symbol: string): Promise<StockQuote[]> => {
    symbol = 'MMM';
    console.log(API_URL + '/quote/' + symbol + '/dates/2022-09-01/2022-12-31');
    const response: AxiosResponse<StockQuote[]> = await axios.get(API_URL + '/quote/' + symbol + '/dates/2022-09-01/2020-12-31');
    return response.data;
}

export const stockQuoteChartData = async (symbol: string): Promise<TimeSeriesPoint[][]> => {
    let graphData: TimeSeriesPoint[][] = [[]];
    return stockQuote(symbol).then((dataPoint: StockQuote[]) => {
        dataPoint.forEach((quote: StockQuote) => {
            graphData[0].push(new TimeSeriesPoint(quote.date, quote.adjusted_close));
        });
        return graphData;
    });
}

export const yearlyIncomeStatements = async (symbol: string): Promise<IncomeStatement[]> => {
    const response: AxiosResponse<IncomeStatement[]> = await axios.get(API_URL + '/fin/statements/' + symbol + '/YEAR');
    return response.data;
}

export const quarterlyIncomeStatements = async (symbol: string): Promise<IncomeStatement[]> => {
    const response: AxiosResponse<IncomeStatement[]> = await axios.get(API_URL + '/fin/statements/' + symbol + '/QUARTER');
    return response.data;
}