import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  title: String,
  desc: String,
  done: Boolean
});

export default todoSchema;