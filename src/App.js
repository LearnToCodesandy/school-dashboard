import { useContext } from "react";
import "./styles.css";
import ListContainer from "./components/ListContainer";
import Sidebar from "./components/Sidebar";
import StudentForm from "./components/StudentForm";
import DeleteStudentForm from "./components/DeleteStudentForm";
import UpdateForm from "./components/UpdateForm";
import { StudentsContext } from "./context/StudentsContext";

export default function App() {
  const [students, setStudents] = useContext(StudentsContext);
  return (
    <div className="container">
      <UpdateForm />
      <DeleteStudentForm />
      <StudentForm />
      <Sidebar />
      <ListContainer students={students} setStudents={setStudents} />
    </div>
  );
}
