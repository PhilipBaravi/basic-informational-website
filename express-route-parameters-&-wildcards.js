// 🚀 Understanding Express Route Parameters & Wildcards (?, :, *)
// In Express.js, special symbols like ?, :, and * are used in route patterns to make them dynamic and flexible.

// 1️⃣ : (Colon) → Route Parameters
// The : symbol defines a dynamic parameter in a route.
// It captures values from the URL and makes them accessible via req.params.
// 📌 Example: Dynamic Route
// javascript
// Copy
// Edit
app.get("/users/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
// How It Works
// Request URL	Value of req.params.id
// /users/5	"5"
// /users/abc	"abc"
// ✅ You can have multiple parameters:

// javascript
// Copy
// Edit
app.get("/users/:userId/posts/:postId", (req, res) => {
  res.send(`User: ${req.params.userId}, Post: ${req.params.postId}`);
});
// 👉 URL: /users/10/posts/45
// 👉 Response: "User: 10, Post: 45"

// 2️⃣ ? (Question Mark) → Optional Parameters
// The ? symbol makes a parameter optional.
// If the parameter is missing, it won’t break the route.
// 📌 Example: Optional Route Parameter
// javascript
// Copy
// Edit
app.get("/users/:id?", (req, res) => {
  if (req.params.id) {
    res.send(`User ID: ${req.params.id}`);
  } else {
    res.send("No user ID provided");
  }
});
// How It Works
// Request URL	Value of req.params.id
// /users/5	"5"
// /users/	undefined (route still works)
// 3️⃣ * (Asterisk) → Wildcard Matching
// The * symbol matches anything in the route.
// It is useful for catching unknown routes or creating flexible patterns.
// 📌 Example: Wildcard Route
// javascript
// Copy
// Edit
app.get("/files/*", (req, res) => {
  res.send(`Requested file: ${req.params[0]}`);
});
// ✅ Matches:

// /files/document.txt → "Requested file: document.txt"
// /files/images/photo.jpg → "Requested file: images/photo.jpg"
// 4️⃣ Combining : and ?
// You can use :param? to create optional dynamic parameters.

// javascript
// Copy
// Edit
app.get("/category/:name?", (req, res) => {
  const category = req.params.name || "all categories";
  res.send(`Category: ${category}`);
});
// ✅ Matches:

// /category/javascript → "Category: javascript"
// /category/ → "Category: all categories" (uses default)
// 5️⃣ Catch-All * for 404 Pages
// To handle all undefined routes, use * as a catch-all route.

// javascript
// Copy
// Edit
app.get("*", (req, res) => {
  res.status(404).send("404 - Page Not Found");
});
// ✅ This ensures any invalid URL returns a 404 error.

// 🎯 Summary
// Symbol	Purpose	Example
// : (Colon)	Captures dynamic route parameters	/users/:id → req.params.id
// ? (Question Mark)	Makes parameters optional	/users/:id? (works with or without /id)
// * (Asterisk)	Matches anything after a route	/files/* (matches /files/abc/xyz.txt)

// ✅ Final Example with All Concepts
// javascript
// Copy
// Edit
app.get("/product/:id?", (req, res) => {
  const productId = req.params.id || "No product selected";
  res.send(`Product ID: ${productId}`);
});

app.get("/files/*", (req, res) => {
  res.send(`Accessing file: ${req.params[0]}`);
});

app.get("*", (req, res) => {
  res.status(404).send("404 - Page Not Found");
});
