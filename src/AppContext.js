import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

export const AppContext = React.createContext({});

const initialState = {
  selectedCountry: {},
  openModal: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'selectedCountry':
      return { ...state, selectedCountry: action.selectedCountry };
    case 'modal':
      return { ...state, openModal: action.openModal };
    default:
      return state;
  }
};
export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
