import React, { createContext, useState } from 'react';

export const alertContext = createContext({});

const AlertProvider = ({ children }) => {
  const [alertState, setAlertState] = useState(false);

  const openAlert = () => {
    setAlertState(true);
  };
  const closeAlert = () => {
    setAlertState(false);
  };

  return (
    <alertContext.Provider value={{ alertState, openAlert, closeAlert }}>
      {children}
    </alertContext.Provider>
  );
};

export default AlertProvider;