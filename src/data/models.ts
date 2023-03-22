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

export interface IncomeStatement {
    id: number;
    comprehensive_income_net_of_tax: number;
    cost_of_revenue: number;
    costof_goods_and_services_sold: number;
    depreciation: number;
    depreciation_and_amortization: number;
    ebit: number;
    ebitda: number;
    fiscal_date_ending: string;
    gross_profit: number;
    income_before_tax: number;
    income_tax_expense: number;
    interest_and_debt_expense: number;
    interest_expense: number;
    interest_income: number;
    investment_income_net: number;
    net_income: number;
    net_income_from_continuing_operations: number;
    net_interest_income: number;
    non_interest_income: number;
    operating_expenses: number;
    operating_income: number;
    other_non_operating_income: number;
    report_type: string;
    reported_currency: number;
    research_and_development: number;
    selling_general_and_administrative: number;
    symbol: string;
    total_revenue: number;
    stock_symbol: string;
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
    split_coeff: number
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