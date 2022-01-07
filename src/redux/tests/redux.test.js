import {
  CHANGE_SEARCH_FIELD,
  GET_COMPANY_INFO,
  GET_STOCKS,
  RETURN_TO_STOCKS_PAGE,
} from '../stocks/constants';
import stocksReducer from '../stocks/reducer';

const stocks = [
  {
    symbol: 'SPY',
    name: 'SPDR S&P 500 ETF Trust',
    price: 467.94,
    exchange: 'New York Stock Exchange Arca',
    exchangeShortName: 'AMEX',
  },
  {
    symbol: 'CMCSA',
    name: 'Comcast Corporation',
    price: 50.51,
    exchange: 'Nasdaq Global Select',
    exchangeShortName: 'NASDAQ',
  },
  {
    symbol: 'KMI',
    name: 'Kinder Morgan, Inc.',
    price: 17.02,
    exchange: 'New York Stock Exchange',
    exchangeShortName: 'NYSE',
  },
];

const company = [
  {
    symbol: 'AAPL',
    changes: 4.439987,
    companyName: 'Apple Inc.',
    currency: 'USD',
    exchange: 'Nasdaq Global Select',
    exchangeShortName: 'NASDAQ',
    industry: 'Consumer Electronics',
    website: 'https://www.apple.com',
    ceo: 'Mr. Timothy Cook',
    sector: 'Technology',
    country: 'US',
    fullTimeEmployees: '154000',
    phone: '14089961010',
    address: '1 Apple Park Way',
    city: 'Cupertino',
    state: 'CALIFORNIA',
    zip: '95014',
  },
];

const iniitalState = { searchField: '', stocks, company };

describe('StocksReducer Testing', () => {
  it('should return changed state for search field', () => {
    const searchVal = 'testing';
    const newState = stocksReducer(undefined, {
      type: CHANGE_SEARCH_FIELD,
      payload: searchVal,
    });
    expect(newState.searchField).toEqual('testing');
  });

  it('should return stocks called with getstocks action', () => {
    const newState = stocksReducer(undefined, {
      type: GET_STOCKS,
      stocks,
    });

    expect(newState.stocks).toEqual(expect.arrayContaining(stocks));
  });

  it('should return company info with getCompanyInfo action', () => {
    const newState = stocksReducer(undefined, {
      type: GET_COMPANY_INFO,
      company,
    });
    expect(newState.company).toEqual(expect.arrayContaining(company));
  });

  it('should test returnToStocks action', () => {
    const currentState = stocksReducer(iniitalState, {
      type: RETURN_TO_STOCKS_PAGE,
    });
    expect(currentState.company).toEqual([]);
  });
});
