import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchChange, searchField }) => (
  <div className="search-field">
    <input
      className="search-input"
      type="search"
      placeholder="Search"
      value={searchField === '' ? '' : searchField}
      onChange={searchChange}
    />
  </div>
);

Search.propTypes = {
  searchChange: PropTypes.func.isRequired,
  searchField: PropTypes.string.isRequired,
};

export default Search;
