import express from "express";
import {connectDb} from "./db.js";
// import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import todoRoutes from "./routes/todo.routes.js";

dotenv.config();

// *** CONSTANTS ***
const app = express()
const port = process.env.PORT || 3000;
const __dirname = path.resolve();

// *** HANDLERS ***
app.use(express.json())
// app.use(cors())
app.use('/todos', todoRoutes)


if (process.env.NODE_ENV === "Production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  })
}

// *** API RUN ***
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  connectDb().then(() => {
    console.log('Database Connected');
  });
})