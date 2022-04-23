import React, { useState, createContext } from "react";

export const ModalsContext = createContext();

export const ModalsProvider = (props) => {
  const [createForm, setCreateForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  return (
    <ModalsContext.Provider
      value={[
        createForm,
        setCreateForm,
        deleteForm,
        setDeleteForm,
        updateForm,
        setUpdateForm
      ]}
    >
      {props.children}
    </ModalsContext.Provider>
  );
};
