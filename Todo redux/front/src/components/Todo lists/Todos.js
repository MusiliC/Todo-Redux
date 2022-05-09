import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../data";

import "./todos.css";
import { Link } from "react-router-dom";
import { getTodos } from "../../redux/actions/todoActions";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.allTodos.todos);
  console.log(todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="todo-list">
      <div className="my-todos">
        {todos.map((items) => (
          <div className="all-todos" key={items.todo_id}>
            <Link to={`/todo/${items.todo_id}`}>
              <div className="single-todo">
                <div className="item-todo">
                  <ul>
                    <li> {items.todo_task}</li>
                  </ul>
                </div>
               
              </div>{" "}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
