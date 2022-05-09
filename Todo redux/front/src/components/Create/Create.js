import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { createTodo } from "../../redux/actions/todoActions";
import "./create.css";

function Create() {

const dispatch = useDispatch();
const navigate = useNavigate();

  const [todo, setTodo] = useState({
    todo_task: "",
    todo_description: "",
    todo_date: "",
  });

  const handleInputChange = (e) => {
    setTodo((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    dispatch(createTodo(todo))
    console.log("Task created successfully...!");
    navigate("/")
  }

  // useEffect (() =>{
    
  // },[])

  return (
    <div className="create">
      <div className="create-container">
        <div className="form">
          <form action="">
            <div className="label">
              <span>
                <p>Enter Todo</p>
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
                <p>Enter Todo Description</p>
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
          <button id="todo" onClick={handleSubmit}>Add Todo</button>
        </div>
      </div>
    </div>
  );
}

export default Create;
