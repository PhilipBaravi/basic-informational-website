import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("All indexes");
});
indexRouter.get("/:indexID", (req, res) => {
  const { indexID } = req.params;
  res.send(`Index is ${indexID}`);
});

export default indexRouter;
