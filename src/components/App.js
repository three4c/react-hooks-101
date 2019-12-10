import React, { useReducer, useEffect } from "react";
import EventForm from "./EventForm";
import Events from "./Events";
import OperationLogs from "./OperationLogs";
import AppContenxt from "../contexts/AppContext";
import reducer from "../reducers";
import "bootstrap/dist/css/bootstrap.min.css";

const APP_KEY = "appWithRedux";

const App = () => {
  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: []
      };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("appWithRedux", JSON.stringify(state));
  }, [state]);

  return (
    <AppContenxt.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContenxt.Provider>
  );
};

export default App;
