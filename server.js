import http from "http";
import fs from "fs";
import url from "url";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  let filePath = path.join(
    __dirname,
    pathname === "/" ? "index.html" : `${pathname}.html`
  );

  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile(path.join(__dirname, "404.html"), (err, notFoundData) => {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(notFoundData);
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
