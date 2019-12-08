import React, { useContext } from "react";
import Evnet from "./Event";
import AppContenxt from "../contexts/AppContext";

const Events = () => {
  const { state } = useContext(AppContenxt);
  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Evnet key={index} event={event} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
