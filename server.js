const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || process.env.PM2_SERVE_PORT || 3030);
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  ".css": "text/css; charset=UTF-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=UTF-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=UTF-8",
  ".json": "application/json; charset=UTF-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=UTF-8",
  ".webp": "image/webp"
};

function getSafePath(urlPath) {
  const decodedPath = decodeURIComponent(urlPath.split("?")[0]);
  const normalizedPath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  const relativePath = normalizedPath === path.sep ? "index.html" : normalizedPath.replace(/^[/\\]+/, "");
  const resolvedPath = path.resolve(ROOT_DIR, relativePath);

  if (!resolvedPath.startsWith(ROOT_DIR)) {
    return null;
  }

  return resolvedPath;
}

function sendFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";

  res.writeHead(200, { "Content-Type": contentType });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  const safePath = getSafePath(req.url || "/");

  if (!safePath) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=UTF-8" });
    res.end("Forbidden");
    return;
  }

  fs.stat(safePath, (statError, stats) => {
    if (statError) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=UTF-8" });
      res.end("Not Found");
      return;
    }

    if (stats.isDirectory()) {
      const indexPath = path.join(safePath, "index.html");
      fs.stat(indexPath, (indexError, indexStats) => {
        if (indexError || !indexStats.isFile()) {
          res.writeHead(403, { "Content-Type": "text/plain; charset=UTF-8" });
          res.end("Forbidden");
          return;
        }

        sendFile(indexPath, res);
      });
      return;
    }

    sendFile(safePath, res);
  });
});

server.listen(PORT, () => {
  console.log(`Static server running at http://localhost:${PORT}`);
});
