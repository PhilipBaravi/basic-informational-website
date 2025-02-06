import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import authorRouter from "./routers/authorRouter.js";
import bookRouter from "./routers/bookRouter.js";
import indexRouter from "./routers/indexRouter.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

// Serve static files from a "public" folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/:page?", (req, res) => {
  const page = req.params.page || "index";
  const filePath = path.join(__dirname, `${page}.html`);

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).sendFile(path.join(__dirname, "404.html"));
      res.redirect(path.joib(__dirname, "test.html"));
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
