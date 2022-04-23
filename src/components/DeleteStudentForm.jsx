import { useContext } from "react";
import { CurrentModalData } from "../context/CurrentModalData";
import { ModalsContext } from "../context/ModalsContext";
import { StudentsContext } from "../context/StudentsContext";

const DeleteStudentForm = () => {
  const [current__data, setCurrent__data] = useContext(CurrentModalData);
  const [studs, setStuds] = useContext(StudentsContext);
  const modals = useContext(ModalsContext);
  const deleteForm = modals[2];
  const setDeleteForm = modals[3];

  // handlers
  const deleteStudent = (e) => {
    e.preventDefault();
    const filtered = studs.filter(
      (stud, index) => index !== current__data.index && stud
    );
    setStuds(filtered);
    setDeleteForm(false);
  };
  return (
    <div className={deleteForm ? "form__wrapper" : "form__wrapper d-none"}>
      <div className="form create__student">
        <h3 className="form__title">Remove Student</h3>
        <div className="form__item">
          <h2>
            Are you sure you want to remove the current student from the list ?
          </h2>
        </div>

        <div className="form__item">
          <label htmlFor="student__name">student name</label>
          <p className="form__text">{current__data.name}</p>
        </div>

        <div className="form__item">
          <label htmlFor="student__class">class</label>
          <p className="form__text">{current__data.class}</p>
        </div>

        <div className="btn__container">
          <button
            className="btn btn__outlined"
            onClick={() => {
              setDeleteForm(false);
            }}
          >
            cancel
          </button>
          <button className="btn btn__danger" onClick={(e) => deleteStudent(e)}>
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteStudentForm;
