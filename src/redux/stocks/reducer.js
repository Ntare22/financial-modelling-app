import {
  CHANGE_SEARCH_FIELD, GET_COMPANY_INFO, GET_STOCKS, RETURN_TO_STOCKS_PAGE,
} from './constants';

const initialState = {
  searchField: '',
  stocks: [],
  company: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    case GET_STOCKS:
      return { ...state, stocks: [...action.stocks] };
    case GET_COMPANY_INFO:
      return { ...state, company: [...action.company] };
    case RETURN_TO_STOCKS_PAGE:
      return { ...state, company: [] };
    default:
      return state;
  }
};

export default reducer;
