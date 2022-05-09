import React, { useEffect } from "react";
import { useParams } from "react-router";
import { deleteTask, fetchTask } from "../../redux/actions/todoActions";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./todoDetails.css";

function TodoDetails() {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todo = useSelector((state) => state.allTodos.todos);
  console.log(todo);

    useEffect(() => {
      dispatch(fetchTask(id));
    }, [id]);

    const handleDelete = () => {
      dispatch(deleteTask(id))
      console.log("Task deleted");
       navigate("/");
    }

  return (
    <div className="todo-details">
      <div className="all-details">
        <div className="personal-details">
          <div className="details-info">
            <p> <span> Todo:</span>  {todo.todo_task}</p>
            <p> <span> Todo Description: </span>{todo.todo_description}</p>
            <p> <span> Todo Date: </span>{todo.todo_date}</p>
          </div>
          <div className="details-buttons">
           <Link to={`/update/${todo.todo_id}`}> <button id="update-todo">Update</button></Link> 
            <button id="delete-todo" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoDetails;
