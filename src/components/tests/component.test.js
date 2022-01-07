import moxios from 'moxios';
import testStore from '../../utils';
import { getStocks } from '../../redux/stocks/actions';

describe('Integration Tests', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const expectedState = [
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

  test('Store is updated correctly', () => {
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    store.dispatch(getStocks()).then(() => {
      const newState = store.getState();
      expect(newState.stocksReducer.stocks).toEqual(expectedState);
    });
  });
});
