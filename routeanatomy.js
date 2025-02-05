// 1. Basic Route Structure
app.METHOD(PATH, HANDLER);

// app => The Express app instance
// METHOD => The HTTP method (GET, POST, PUT, DELETE etc...);
// PATH => The route URL (e.g., /, /users, /about);
// HANDLER The function that runs when the route is accessed

// 2. Example of a Simple Route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// app.get("/") => This route listens to GET requests on /
// (req, res) => { res.send("Hello, World!"); }
// req => Contains data send from the client.
// res => Used to send data back to the client.
// res.send('Hello, World!') => Sends a simple text response

// 3. Route Parameters (:param)
app.get("/users/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`); // User ID = req.params.id for example 123 or user123
});

// How it works:
// :id => A route parameter that captures the value in the URL
// If a client requests /users/123 or users/user123, req.params.id will be '123' or 'user123'
// Response: 'User ID: 123

// Multiple parameters
app.get("/users/:id/posts/:postId", (req, res) => {
  res.send(`User ID: ${req.params.id}, Post ID: ${req.params.postId}`);
});
// URL = /users/5/posts/90
// Response = "User ID: 5, Post ID: 99"

// 4. Query Parameters (?key=value);
// Query parameters are optional values passed in the URL after a ? symbol.
app.get("/search", (req, res) => {
  res.send(`Search Query: ${req.query.q}`);
});

// How it works:
// URL: /search?q=javascript
// req.eury.q => 'javascript'
// Response: 'Search Query: javascript'

// Multiple query parameters:
app.get("/search", (req, res) => {
  res.send(`Search: ${req.query.q}, Category ${req.query.category}`);
});
// URL => /search?q=express&category=node
// Response => 'Search: express, Category: node"
