const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const todos = require('./routes/todos');

//middleware
app.use(express.json());


//routes
app.get("/hello", (req, res) => {
  res.send("todo list app");
});

app.use("/api/v1/todos", todos);
app.use("/api/v1/todos", todos);

const connection_url = `mongodb+srv://patryksztuczka:${process.env.DB_PASSWORD}@cluster0.ufylr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const port = process.env.PORT || 3000;

mongoose.connect(connection_url)
  .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
  .catch(err => console.error(err.message));
