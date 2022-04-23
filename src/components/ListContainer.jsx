import { useContext } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ListItem from "./ListItem";
import { ModalsContext } from "../context/ModalsContext";

// functions
const calculateScores = (obj, marks) => {
  if (marks >= 0 && marks <= 30) {
    obj.result = "failed";
    obj.grade = "poor";
  }
  if (marks > 30 && marks <= 75) {
    obj.result = "passed";
    obj.grade = "average";
  }
  if (marks > 75 && marks <= 100) {
    obj.result = "passed";
    obj.grade = "excellent";
  }
};
const ListContainer = ({ students, setStudents }) => {
  const [createForm, setCreateForm] = useContext(ModalsContext);
  return (
    <div className="list__container">
      <div className="list__header">
        <h3 className="list__title">Students</h3>
        <button className="list__button" onClick={() => setCreateForm(true)}>
          <AddOutlinedIcon />
          Add
        </button>
      </div>
      <div className="list__body">
        <div className="list__body__header">
          <p className="no">No.</p>
          <p className="item">Student Name</p>
          <p className="item">Class</p>
          <p className="item">Result</p>
          <p className="item">Score</p>
          <p className="item">Grade</p>
        </div>
        {students.map((student, index) => {
          calculateScores(student, student.score);
          return (
            <ListItem student={student} index={index} key={Math.random()} />
          );
        })}
      </div>
      <p className="footer__text">
        Showing {students.length} of {students.length} entries
      </p>
    </div>
  );
};

export default ListContainer;
