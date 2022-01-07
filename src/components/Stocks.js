import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCompanyInfo,
  getStocks,
  setSearchField,
} from '../redux/stocks/actions';
import CompanyDetails from './CompanyDetails';
import Search from './Search';
import Stock from './Stock';

const Stocks = () => {
  const stocks = useSelector((state) => state.stocksReducer.stocks);
  const company = useSelector((state) => state.stocksReducer.company);
  const searchField = useSelector((state) => state.stocksReducer.searchField);

  const dispatch = useDispatch();
  useEffect(() => {
    if (stocks.length === 0) dispatch(getStocks());
  }, []);

  const handleCompanyInfo = (symbol) => {
    dispatch(getCompanyInfo(symbol));
  };

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };

  const filteredStocks = stocks.filter(
    (stocks) => stocks.name.toLowerCase().includes(searchField.toLowerCase()),
  );

  return company.length !== 0 ? (
    <CompanyDetails company={company} />
  ) : (
    <div className="stocks-container">
      <Search searchChange={onSearchChange} searchField={searchField} />
      <div className="stock-cards">
        {filteredStocks.map((stock) => (
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
        ))}
      </div>
    </div>
  );
};

export default Stocks;
