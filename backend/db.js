import mongoose from 'mongoose'
import todoSchema from "./todoSchema.js";
import dotenv from "dotenv";

dotenv.config();

export async function connectDb() {
  const db = await mongoose.connect(process.env.MONGO_URI);
}

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;