import { createContext, useContext, useReducer } from 'react';

// Define the initial state and reducer function
const initialState = {
  selectedPlan: null, // Add selectedPlan to the initial state
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PLAN':
      return {
        ...state,
        selectedPlan: action.payload, // Update selectedPlan
      };
    default:
      return state;
  }
};

// Create the context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using context
export const useAppContext = () => useContext(AppContext);
