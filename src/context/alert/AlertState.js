import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { alertReducer } from "./alertReducer";
import { HIDE_ALERT, SHOW_ALERT } from "../types";

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, { visible: false });

  const show = (text, type = "warning") => {
    dispatch({
      type: SHOW_ALERT,
      payload: { text, type },
    });
  };
  // ! async action
  // const fetchData = async()=>{
  //   const {data} = await fetch(process.env.REACT_APP_API_URL);
  //   dispatch({
  //     type: "FETCH_DATA",
  //     payload: data
  //   })
  // }

  const hide = () => dispatch({ type: HIDE_ALERT });

  return (
    <AlertContext.Provider
      value={{
        show,
        hide,
        alert: state,
        fetchData, //!Передаем в Alert component
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
