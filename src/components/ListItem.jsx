import { useContext } from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { CurrentModalData } from "../context/CurrentModalData";
import { ModalsContext } from "../context/ModalsContext";
const ListItem = ({ student, index }) => {
  const [std, setStd] = useContext(CurrentModalData);
  const modals = useContext(ModalsContext);
  const setDeleteForm = modals[3];
  const setUpdateForm = modals[5];

  // handlers
  const handleDeleteItem = (e) => {
    e.preventDefault();
    student.index = index;
    setStd(student);
    setDeleteForm(true);
  };

  const handleUpdateItem = (e) => {
    e.preventDefault();
    setUpdateForm(true);
    student.index = index;
    setStd(student);
  };

  return (
    <div className="list__body__item">
      <p className="no">{index + 1}.</p>
      <p className="item">{student.name}</p>
      <p className="item">
        {student.class > 3 ? `${student.class}th` : `${student.class}nd`}
      </p>
      <p className="item">
        <span
          className={
            student.result === "passed"
              ? "result__text pass"
              : "result__text fail"
          }
        >
          {student.result}
        </span>
      </p>
      <p className="item">{student.score}</p>
      <p className="item grade">
        <span
          className={
            student.grade === "excellent"
              ? "grade__text pass__text"
              : student.grade === "average"
              ? "grade__text average__text"
              : "grade__text fail__text"
          }
        >
          {student.grade}
        </span>
        <div className="write">
          <EditRoundedIcon onClick={(e) => handleUpdateItem(e)} />
          <DeleteOutlineRoundedIcon onClick={(e) => handleDeleteItem(e)} />
        </div>
      </p>
    </div>
  );
};

export default ListItem;
