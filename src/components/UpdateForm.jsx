import { useRef, useEffect, useState, useContext } from "react";
import { ModalsContext } from "../context/ModalsContext";
import { StudentsContext } from "../context/StudentsContext";
import { CurrentModalData } from "../context/CurrentModalData";

const generateConfig = (score) => {
  const temp = { score: score };
  if (score <= 30 && score >= 0) {
    temp.result = "failed";
    temp.grade = "poor";
    return temp;
  }
  if (score > 30 && score <= 75) {
    temp.result = "passed";
    temp.grade = "average";
    return temp;
  }
  if (score > 75 && score <= 100) {
    temp.result = "passed";
    temp.grade = "excellent";
    return temp;
  }
  if (score > 100) {
    temp.result = "what???";
    temp.grade = "I do not know!!!!";
    return temp;
  }
};

const isDisable = ({ nameError, scoreError, classError }) => {
  if (nameError) {
    return true;
  } else if (classError) {
    return true;
  } else if (scoreError) {
    return true;
  } else {
    return false;
  }
};

const UpdateForm = () => {
  const modals = useContext(ModalsContext);
  const updateForm = modals[4];
  const setUpdateForm = modals[5];
  const nameField = useRef();
  const classField = useRef();
  const scoreField = useRef();

  const [students, setStudents] = useContext(StudentsContext);
  const current__stud = useContext(CurrentModalData)[0];
  const [config, setConfig] = useState({});

  const [nameError, setNameError] = useState(false);
  const [classError, setClassError] = useState(false);
  const [scoreError, setScoreError] = useState(false);

  // effects
  useEffect(() => {
    nameField.current.value = current__stud.name;
    classField.current.value = current__stud.class;
    scoreField.current.value = current__stud.score;
    setConfig(generateConfig(current__stud.score));
  }, [current__stud]);

  // handlers
  const updateStudent = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const updated__name = fd.get("name");
    const updated__class = fd.get("standard");
    const updated__score = fd.get("score");
    const updatedStudents = students.filter((stud, ind) => {
      if (ind === current__stud.index) {
        stud.name = updated__name;
        stud.class = updated__class;
        stud.score = updated__score;
        return stud;
      } else {
        return stud;
      }
    });
    setStudents(updatedStudents);
    setUpdateForm(false);
  };

  const handleConfig = (e) => {
    setConfig(generateConfig(e.target.value));
  };

  return (
    <div className={updateForm ? "form__wrapper" : "form__wrapper d-none"}>
      <form
        className="form create__student"
        onSubmit={(e) => {
          e.preventDefault();
          updateStudent(e);
        }}
      >
        <h3 className="form__title">Edit Student</h3>
        <div className="form__item">
          <label htmlFor="name">student name *</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameField}
            className={nameError ? "input-warning" : ""}
            placeholder="robert downey junior"
            onChange={(e) => {
              if (nameField.current.value.length === 0) {
                setNameError(true);
              } else {
                setNameError(false);
              }
            }}
          />
          <p className={nameError ? "error__text" : "d-none"}>
            Error: Name field cannot be left blank
          </p>
        </div>

        <div className="form__item">
          <label htmlFor="class">class *</label>
          <input
            type="number"
            name="standard"
            id="class"
            min="1"
            max="12"
            ref={classField}
            placeholder="8th"
            className={classError ? "input-warning" : ""}
            onChange={(e) => {
              if (
                classField.current.value <= 0 ||
                classField.current.value > 12
              ) {
                setClassError(true);
              } else {
                setClassError(false);
              }
            }}
          />
          {classError ? (
            <p className="error__text">
              Error : please input values between 1 & 12
            </p>
          ) : (
            <p className="normal__text"> please input values between 1 & 12</p>
          )}
        </div>

        <div className="form__item">
          <label htmlFor="score">score *</label>
          <input
            type="number"
            name="score"
            id="score"
            min="0"
            max="100"
            ref={scoreField}
            placeholder="80"
            onLoad={(e) => handleConfig(e)}
            onChange={(e) => {
              handleConfig(e);
              if (
                scoreField.current.value <= 0 ||
                scoreField.current.value > 100
              ) {
                setScoreError(true);
              } else {
                setScoreError(false);
              }
            }}
            className={scoreError ? "input-warning" : ""}
          />
          {scoreError ? (
            <p className="error__text">
              Error : Please input values between 0 & 100
            </p>
          ) : (
            <p className="normal__text"> please input values between 0 & 100</p>
          )}
        </div>

        <div className="form__item">
          <label htmlFor="result">result</label>
          <span
            className={
              config.score >= 0 && config.score <= 30
                ? "result__text fail"
                : "result__text pass"
            }
          >
            {config.result}
          </span>
        </div>

        <div className="form__item">
          <label htmlFor="grade">grade</label>
          <span
            className={
              config.grade === "excellent"
                ? "grade__span grade__text pass__text"
                : config.grade === "average"
                ? "grade__span grade__text average__text"
                : "grade__span grade__text fail__text"
            }
          >
            {config.grade}
          </span>
        </div>

        <div className="btn__container">
          <button
            className="btn btn__outlined"
            onClick={(e) => {
              e.preventDefault();
              setUpdateForm(false);
              setNameError(false);
              setClassError(false);
              setScoreError(false);
            }}
          >
            cancel
          </button>
          <input
            type="submit"
            className="btn btn__contained"
            value="confirm"
            disabled={isDisable({ nameError, classError, scoreError })}
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
