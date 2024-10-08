import mongoose from 'mongoose'
import todoSchema from "./todoSchema.js";


export async function connectDb() {
  await mongoose.connect(process.env.MONGO_URI);
}

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;