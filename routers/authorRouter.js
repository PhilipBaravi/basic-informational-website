import { Router } from "express";
import { getAuthorById } from "../controllers/authorController.js";

const authorRouter = Router();

authorRouter.get("/:authorId", getAuthorById);

authorRouter.get("/", (req, res) => res.send("All authors"));
authorRouter.get("/:authorID", (req, res) => {
  const { authorID } = req.params;
  res.send(`The route is /${authorID}`);
});

export default authorRouter;
