const express = require('express');
require('./db/connect');

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

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is listening on port: ${port}...`));
