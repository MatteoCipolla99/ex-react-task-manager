import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Task List</NavLink>
          </li>
          <li>
            <NavLink to="/add">Aggiungi Task</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
