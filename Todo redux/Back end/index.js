const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/todos", require('./routes/todoRouter'))




app.listen(3001, () => {
  console.log("Server Is Running on port 3001");
});