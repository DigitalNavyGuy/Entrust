import { Route, Routes } from "react-router-dom";

import Comments from "./components/Comments";

import Task from "./components/Task";

import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/task" element={<Task />} />

      <Route path="/comments/:category/:id" element={<Comments />} />
    </Routes>
  );
}

export default App;
