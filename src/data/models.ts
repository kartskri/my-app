export interface Stock {
    symbol: string;
    company: string;
    headquarters: string;
}

export interface StockOverview {
    symbol: string;
    asset_type: string;
    name: string;
    description: string;
    cik: string;
    exchange: string;
    currency: string;
    country: string;
    sector: string;
    industry: string;
    address: string;
    city: string;
    state: string;
    fiscal_year_end: string;
    latest_quarter: string;
    marketcap: string;
    ebitda: string;
    pe_ratio: string;
    peg_ratio: string;
    book_value: string;
    dividend_per_share: string;
    dividend_yield: string;
    eps: string;
    revenue_per_share: string;
    profit_margin: string;
    operating_margin: string;
    return_on_assets: string;
    return_on_equity: string;
    revenue: string;
    gross_profit: string;
    diluted_eps: string;
    quarterly_earnings_growth: string;
    quarterly_revenue_growth: string;
    analyst_target_price: string;
    trailing_pe: string;
    forward_pe: string;
    price_to_sales: string;
    price_to_book: string;
    ev_to_revenue: string;
    ev_to_ebidta: string;
    beta: string;
    fiftytwo_week_high: string;
    fiftytwo_week_low: string;
    fifty_day_ma: string;
    two_hundred_ma: string;
    shares_outstanding: string;
    dividend_date: string;
    ex_dividend_date: string;
}

export interface Company {
    symbol: string;
    company: string;
}

export interface SMA {
    id: string;
    date: string;
    symbol: string;
    sma_20: number;
    sma_200: number;
}

export interface Exponential {
    id: string;
    date: string;
    symbol: string;
    ema_20: number;
    ema_200: number;
    cum_ma: number;
}

export interface Bollinger {
    id: string;
    date: string;
    symbol: string;
    bollingerUpper: number;
    bollingerLower: number;
}

export interface RSI {
    id: string;
    date: string;
    symbol: string;
    rsi: number;
}

export interface StockQuote {
    id: number
    adjusted_close: number
    close: number
    date: string
    dividend: number
    high: number
    low: number
    open: number
    splitCoeff: number
    symbol: string
    volume: number
}

export class GraphData {
    title: string;
    chartType: string;
    dataPoints: TimeSeriesPoint[];

    public constructor(title: string, chartType: string) {
        this.title = title;
        this.chartType = chartType;
        this.dataPoints = [];
    }
}

export class TimeSeriesPoint {
    date: string;
    value: number;

    public constructor(date: string, value: number) {
        this.date = date;
        this.value = value;
    }
}