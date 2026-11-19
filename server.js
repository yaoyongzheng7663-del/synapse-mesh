#!/usr/bin/env node
/**
 * Synapse Mesh — zero-dependency local demo server.
 *
 * Serves the web demo at http://localhost:4173/
 * Usage:  node server.js   (then open http://localhost:4173/)
 */

import http from "node:http";
import { readFile } from "node:fs/promises";
import { join, extname, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = __dirname;
const PORT = process.env.PORT ? Number(process.env.PORT) : 4173;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
};

const server = http.createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(req.url.split("?")[0]);
    if (path === "/") path = "/web/index.html";
    const filePath = normalize(join(root, path));
    console.log(`${req.method} ${req.url} -> ${filePath}`);
    if (!filePath.startsWith(root)) {
      res.writeHead(403); res.end("Forbidden"); return;
    }
    const body = await readFile(filePath);
    res.writeHead(200, { "Content-Type": MIME[extname(filePath)] || "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
});

server.listen(PORT, () => {
  console.log(`Synapse Mesh demo running at http://localhost:${PORT}/`);
  console.log("Press Ctrl+C to stop.");
});
