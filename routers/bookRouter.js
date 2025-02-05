import { Router } from "express";

const bookRouter = Router();

bookRouter.get("/", (req, res) => {
  res.send("All Book Routes");
});
bookRouter.get("/:bookID", (req, res) => {
  const { bookID } = req.params;
  res.send(`Book Id is ${bookID}`);
});

export default bookRouter;
