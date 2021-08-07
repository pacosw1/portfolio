import * as React from "react";

export const ErrorContext = React.createContext(200);

export const ErrorContextProvider = ({ code, children }) => {
  const [currentCode, setCode] = React.useState(code);

  return (
    <ErrorContext.Provider value={{ currentCode, setCode }}>
      {children}
    </ErrorContext.Provider>
  );
};
