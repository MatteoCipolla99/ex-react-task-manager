import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
}

export default App;
