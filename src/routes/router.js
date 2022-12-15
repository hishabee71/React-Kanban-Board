import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import TaskManage from "../Pages/TaskManage";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/task" element={<TaskManage/>}/>
    </Routes>
  );
};

export default routes;
