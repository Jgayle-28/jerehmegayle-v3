import React, { useReducer } from 'react';
import axios from 'axios';
import AppContext from './appContext';
import appReducer from './appReducer';
import { SET_INITIAL_LOAD } from './types';

const AppState = (props) => {
  // Initial State
  const initialState = {
    initialLoad: true,
    loading: false,
  };

  // Initialize Reducer
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Loading
  const setInitialLoad = (status) => {
    dispatch({
      type: SET_INITIAL_LOAD,
      payload: status,
    });
  };

  return (
    <AppContext.Provider
      value={{
        initialLoad: state.initialLoad,
        loading: state.loading,
        setInitialLoad,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
