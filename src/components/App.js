import React, { useReducer } from "react";
import EventForm from "./EventForm";
import Events from "./Events";
import AppContenxt from "../contexts/AppContext";
import reducer from "../reducers";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContenxt.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContenxt.Provider>
  );
};

export default App;
