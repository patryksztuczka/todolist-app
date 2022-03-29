const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = `mongodb+srv://patryksztuczka:${process.env.DB_PASSWORD}@cluster0.ufylr.mongodb.net/todo-list?retryWrites=true&w=majority`;

mongoose.connect(connectionString)
  .then(() => { console.log("Connected to the database..."); })
  .catch(err => { console.log(err); });