import express from "express";
import Todo, {connectDb} from "./db.js";
import bodyParser from "body-parser";
import db from "./db.js";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

// *** CONSTANTS ***
const app = express()
const port = process.env.PORT || 3000;
const jsonParser = bodyParser.json()
const __dirname = path.resolve();


app.use(cors())

// *** API METHODS ***
// Fetch all Todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await db.find({});
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


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  })
}

// *** API RUN ***
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  connectDb().then(() => {
    console.log('Database Connected');
  });
})