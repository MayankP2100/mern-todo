import todoSchema from "../todoSchema.js";
import mongoose from "mongoose";
import db from "../db.js";
import Todo from "../db.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await db.find({});
    res.send(todos);
  } catch (error) {
    console.log('Error while finding', error);
    res.send(error.message);
  }
}

export const createTodo = async (req, res) => {
  const data = req.body;
  res.send(`Data received: ${data}`)

  try {
    const newTodo = new Todo(data);
    await newTodo.save();
  } catch (error) {
    res.send(error.message);
  }
}

export const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    await db.findByIdAndDelete(id);
    res.send(`Deleted ${id}`);
  } catch (error) {
    res.send(error.message);
  }
}

export const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await db.findByIdAndUpdate(id, data);
    res.send(`Updated ${id}`);
  } catch (error) {
    res.send(error.message);
  }
}