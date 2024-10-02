import express from "express";
import Todo, {connectDb} from "./db.js";
import bodyParser from "body-parser";
import db from "./db.js";
import cors from "cors";


// *** CONSTANTS ***
const app = express()
const port = 3000
const jsonParser = bodyParser.json()


app.use(cors())

// *** API METHODS ***
// Fetch all Todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await db.find({});
    console.log(todos);
    res.send(todos);
  } catch (error) {
    console.log('Error while finding', error);
    res.send(error.message);
  }
});

// Add a Todo
app.post('/todos', jsonParser, async (req, res) => {
  const data = req.body;
  res.send(`Data received: ${data}`)

  try {
    const newTodo = new Todo(data);
    await newTodo.save();
  } catch (error) {
    res.send(error.message);
  }
});

// Delete a Todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await db.findByIdAndDelete(id);
    res.send(`Deleted ${id}`);
  } catch (error) {
    res.send(error.message);
  }
});

// Update a Todo
app.put('/todos/:id', jsonParser, async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await db.findByIdAndUpdate(id, data);
    res.send(`Updated ${id}`);
  } catch (error) {
    res.send(error.message);
  }
});


// *** API RUN ***
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  connectDb().then(() => {
    console.log('Database Connected');
  });
})