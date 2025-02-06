import db from "../db.js";

export const getAuthorById = async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    res.status(400).send("Author not found");
    return;
  }

  res.send(`Author name: ${author.name}`);
};
