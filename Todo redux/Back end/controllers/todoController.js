const mssql = require("mssql");
const config = require("../config/db");
const { v4: uuidv4 } = require("uuid");


async function getTodos (req, res) {
    try {

        let pool = await mssql.connect(config);
        let todos = await pool.request().execute(`getTodos`);

        return res.json(todos.recordsets[0])
        
    } catch (error) {
        console.log(error);
    }
}

async function getOneTodo (req,res) {

    const id = req.params.id;

    try {

        let pool = await mssql.connect(config);
        let todo = await pool.request().input("todo_id", id).execute(`oneTodo`);

        return res.json(todo.recordsets[0])
        
    } catch (error) {
        console.log(error);
    }
}

async function createTodo(req,res) {

    const {todo_id, todo_task, todo_description, todo_date} = req.body;

  try {

        let pool = await mssql.connect(config);
        const id = uuidv4();
        await pool
          .request()
          .input("todo_id", id)
          .input("todo_task", todo_task)
          .input("todo_description", todo_description)
          .input("todo_date", todo_date)
          .execute(`insertTodo`);
        

          return res.json("Data inserted successfully")


  } catch (error) {
      console.log(error);
  }

}

async function deleteTodo (req,res) {

    const id = req.params.id;

    try {

        let pool = await mssql.connect(config)

        let deletedTodo = await pool
          .request()
          .input("todo_id", id)
          .execute(`deleteTodo`);

          return res.json("Task deleted");
        
    } catch (error) {
        console.log(error);
    }
}

async function updateTask(req,res) {

  const { todo_task, todo_description, todo_date } = req.body;
  const id = req.params.id

    try {

        const pool = await mssql.connect(config)
         await pool
           .request()
           .input("todo_id", id)
           .input("todo_task", todo_task)
           .input("todo_description", todo_description)
           .input("todo_date", todo_date)
           .execute(`updateTodo`);
        
            return res.json("Data Updated successfully");

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
  getTodos,
  getOneTodo,
  createTodo,
  deleteTodo,
  updateTask
};