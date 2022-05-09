import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Create from "./components/Create/Create";
import Navbar from "./components/navbar/Navbar";
import TodoDetails from "./components/todo details/TodoDetails";
import Todos from "./components/Todo lists/Todos";
import UpdateTodo from "./components/update Todo/UpdateTodo";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Todos />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/todo/:id" element={<TodoDetails />}></Route>
          <Route path="/update/:id" element={<UpdateTodo />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
