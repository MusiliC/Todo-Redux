import React, { useState} from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { updateTask } from "../../redux/actions/todoActions";
import { useDispatch } from "react-redux";

function UpdateTodo() {
  const updateTodo = useSelector((state) => state.allTodos.todos);
  console.log(updateTodo);
 

  const { id } = useParams();

  console.log(id);

  const [todo, setTodo] = useState({
    todo_task: "",
    todo_description: "",
    todo_date: "",
  });

 
  const handleInputChange = (e) => {
    setTodo((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleUpdate = () => {};

  return (
    <div className="create">
      <div className="create-container">
        <div className="form">
          <form action="">
            <div className="label">
              <span>
                <p>Edit Todo</p>
              </span>
            </div>
            <input
              type="text"
              name="todo_task"
              value={todo.todo_task}
                onChange={handleInputChange}
              
            />
            <div className="label">
              <span>
                <p>Edit Todo Description</p>
              </span>
            </div>
            <textarea
              name="todo_description"
              value={todo.todo_description}
                onChange={handleInputChange}
              id=""
              rows="4"
            ></textarea>
            <div className="label">
              <span>
                <p>Choose the date</p>
              </span>
            </div>
            <input
              id="select"
              name="todo_date"
              value={todo.todo_date}
                onChange={handleInputChange}

              type="date"
            />
          </form>
          <div className="details-buttons">
            <button id="todo" onClick={handleUpdate}>
              Update Todo
            </button>
            <button id="delete-todo">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateTodo;
