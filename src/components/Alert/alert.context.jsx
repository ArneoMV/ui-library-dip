import { createContext, useEffect, useRef, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setAlerts([]);
    }, 5000);
  }, [alerts]);

  const showAlert = (text, type) => {
    const newAlert = { text, type, id: Date.now() };
    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
  };

  return (
    <AlertContext.Provider value={{ alerts, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;

