const express = require('express');
const cors = require('cors');
const app = express();
const todos = require('./routes/todos');
const connectDB = require('./db/connect');
require('dotenv').config();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/hello", (req, res) => {
  res.send("todo list app");
});

app.use("/api/v1/todos", todos);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => { console.log(`Server is listening on port ${port}...`); });
  } catch (error) {
    console.log(error);
  }
};

start();


