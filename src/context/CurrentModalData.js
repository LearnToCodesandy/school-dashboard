import React, { useState, createContext } from "react";

export const CurrentModalData = createContext();

export const CurrentModalDataProvider = (props) => {
  const [student, setStudent] = useState({
    index: 1,
    name: "sample 3",
    class: "7th",
    score: 60
  });

  return (
    <CurrentModalData.Provider value={[student, setStudent]}>
      {props.children}
    </CurrentModalData.Provider>
  );
};
