import { useRef, useState, useContext } from "react";
import { ModalsContext } from "../context/ModalsContext";
import { StudentsContext } from "../context/StudentsContext";
// functions

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

const isDisable = ({ nError, sError, cError }) => {
  if (nError) {
    return true;
  } else if (cError) {
    return true;
  } else if (sError) {
    return true;
  } else {
    return false;
  }
};

const StudentForm = () => {
  const modals = useContext(ModalsContext);
  const createForm = modals[0];
  const setCreateForm = modals[1];

  const [students, setStudents] = useContext(StudentsContext);
  const [config, setConfig] = useState({
    score: null,
    result: null,
    grade: null
  });

  const [nError, setnError] = useState(false);
  const [cError, setcError] = useState(false);
  const [sError, setsError] = useState(false);

  const nField = useRef();
  const cField = useRef();
  const sField = useRef();

  // handlers
  const addNewStudent = (e) => {
    e.preventDefault();
    const newStudentFormData = new FormData(e.target);
    const name = newStudentFormData.get("name");
    const standard = newStudentFormData.get("standard");
    const score = newStudentFormData.get("score");
    const latestStudents = [...students, { name, class: standard, score }];
    setStudents(latestStudents);
    e.target.reset();
    setCreateForm(false);
    setConfig({
      score: null,
      result: null,
      grade: null
    });
  };

  const handleConfig = (e) => {
    setConfig(generateConfig(e.target.value));
  };

  return (
    <div className={createForm ? "form__wrapper" : "form__wrapper d-none"}>
      <form
        className="form create__student"
        onSubmit={(e) => {
          e.preventDefault();
          addNewStudent(e);
        }}
      >
        <h3 className="form__title">Add Student</h3>
        <div className="form__item">
          <label htmlFor="name">student name *</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nField}
            required={true}
            className={nError ? "input-warning" : ""}
            placeholder="robert downey junior"
            onChange={(e) => {
              if (nField.current.value.length === 0) {
                setnError(true);
              } else {
                setnError(false);
              }
            }}
          />
          <p className={nError ? "error__text" : "d-none"}>
            Error: Name field cannot be left blank
          </p>{" "}
        </div>

        <div className="form__item">
          <label htmlFor="class">class *</label>
          <input
            type="number"
            name="standard"
            id="class"
            min="1"
            max="12"
            className={cError ? "input-warning" : ""}
            ref={cField}
            placeholder="8th"
            required={true}
            onChange={(e) => {
              if (cField.current.value <= 0 || cField.current.value > 12) {
                setcError(true);
              } else {
                setcError(false);
              }
            }}
          />

          {cError ? (
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
            required={true}
            ref={sField}
            placeholder="80"
            className={sError ? "input-warning" : ""}
            onChange={(e) => {
              handleConfig(e);
              if (sField.current.value <= 0 || sField.current.value > 100) {
                setsError(true);
              } else {
                setsError(false);
              }
            }}
          />
          <p className="error__text d-none">Lorem ipsum dolor sit amet.</p>
        </div>

        <div className={config.result ? "form__item" : "d-none"}>
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

        <div className={config.grade ? "form__item" : "d-none"}>
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
              setCreateForm(false);
              setnError(false);
              setcError(false);
              setsError(false);
            }}
          >
            cancel
          </button>
          <input
            type="submit"
            className="btn btn__contained"
            value="confirm"
            disabled={isDisable({ nError, cError, sError })}
          />
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
