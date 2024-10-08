import express from 'express';
import {getTodos, createTodo, deleteTodo, updateTodo} from "../controllers/todo.controller.js";

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.delete('/:id', deleteTodo);
router.put('/:id', updateTodo);

export default router;