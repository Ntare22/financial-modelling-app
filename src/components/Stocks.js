import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanyInfo, getStocks } from '../redux/stocks/actions';
import CompanyDetails from './CompanyDetails';
import Stock from './Stock';

const Stocks = () => {
  const stocks = useSelector((state) => state.stocksReducer.stocks);
  const company = useSelector((state) => state.stocksReducer.company);

  const dispatch = useDispatch();
  useEffect(() => {
    if (stocks.length === 0) dispatch(getStocks());
  }, []);

  const handleCompanyInfo = (symbol) => {
    dispatch(getCompanyInfo(symbol));
  };
  return company.length !== 0 ? (
    <CompanyDetails company={company} />
  ) : (
    <div className="stock-cards">
      {
      stocks.map((stock) => (
        <Stock
          key={stock.symbol}
          symbol={stock.symbol}
          company={stock.name}
          price={stock.price}
          exchange={stock.exchange}
          exchangeShortName={stock.exchangeShortName}
          onClick={(e) => {
            e.preventDefault();
            handleCompanyInfo(stock.symbol);
          }}
        />
      ))
      }
    </div>
  );
};

export default Stocks;
