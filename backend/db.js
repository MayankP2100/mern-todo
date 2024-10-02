import mongoose from 'mongoose'
import todoSchema from "./todoSchema.js";

export async function connectDb() {
  const db = await mongoose.connect('mongodb+srv://mayank:nopass@cluster0.ospvv.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0')
}

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;