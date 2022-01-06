import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { returnToStocks } from '../redux/stocks/actions';

const CompanyDetails = (props) => {
  const { company } = props;
  const dispatch = useDispatch();

  const handleBackEvent = () => {
    dispatch(returnToStocks());
  };

  const companyDetails = [
    { Sector: (company[0].sector !== '') ? company[0].sector : 'No Data' },
    { Industry: (company[0].industry !== '') ? company[0].industry : 'No Data' },
    { 'IPO Date': (company[0].ipoDate !== '') ? company[0].ipoDate : 'No Data' },
    { Employees: (company[0].fullTimeEmployees !== '') ? company[0].fullTimeEmployees : 'No Data' },
    { CEO: (company[0].ceo !== '') ? company[0].ceo : 'No Data' },
    { 'Market Cap': company[0].mktCap },
  ];
  return (
    <div className="company-details">
      <button type="button" onClick={handleBackEvent}>Back</button>
      <div className="company-info">
        <div className="main-info">
          <h1>{company[0].companyName}</h1>
          <a
            type="button"
            href={company[0].website}
            target="_blank"
            rel="noreferrer"
          >
            webiste
          </a>
        </div>
        <div className="description">
          {companyDetails.map((item) => (
            <div key={Object.keys(item)[0]}>
              <span className="description-item">{Object.keys(item)[0]}</span>
              <br />
              <span className="description-item-company">{Object.values(item)[0]}</span>
            </div>
          ))}
        </div>
        <p className="company-summary">{company[0].description}</p>
      </div>
    </div>
  );
};

CompanyDetails.propTypes = {
  company: PropTypes.array.isRequired,
};

export default CompanyDetails;
