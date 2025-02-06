const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

export const getAuthorById = async (authorId) => {
  return authors.find((author) => author.id === authorId);
};
