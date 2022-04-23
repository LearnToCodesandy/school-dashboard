import React, { useState, createContext } from "react";

export const StudentsContext = createContext();

export const StudentsProvider = (props) => {
  const [students, setStudents] = useState([
    {
      name: "sample name",
      class: "8",
      score: "80"
    },
    {
      name: "sampel 2",
      class: "9",
      score: 35
    },
    {
      name: "sample 3",
      class: "7",
      score: 20
    },
    {
      name: "sample 3",
      class: "7",
      score: 60
    },
    {
      name: "sample 3",
      class: "7",
      score: 60
    },
    {
      name: "sample 3",
      class: "7",
      score: 60
    }
  ]);

  return (
    <StudentsContext.Provider value={[students, setStudents]}>
      {props.children}
    </StudentsContext.Provider>
  );
};
