import React from 'react';
import PropTypes from 'prop-types';

const Stock = (props) => {
  const {
    symbol, company, price, exchangeShortName, onClick,
  } = props;

  return (
    <button type="button" className="stock-card" onClick={onClick}>
      <div className="company-info">
        <p className="company">{company}</p>
        <p className="symbol">{symbol}</p>
      </div>
      <h1 className="stock-price">
        $
        {' '}
        {price}
      </h1>
      <p className="exchange">{exchangeShortName}</p>
    </button>
  );
};

Stock.propTypes = {
  symbol: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  exchangeShortName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Stock;
