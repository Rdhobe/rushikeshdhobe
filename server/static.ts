import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export function serveStatic(app: Express) {
  // On Vercel, static files are handled by the edge/filesystem layer
  if (process.env.VERCEL) return;

  const currentFile = fileURLToPath(import.meta.url);
  const currentDir = path.dirname(currentFile);
  const distPath = path.resolve(currentDir, "..", "dist", "public");

  if (!fs.existsSync(distPath)) {
    console.warn(`Static directory not found: ${distPath}`);
    return;
  }

  app.use(express.static(distPath));

  // Catch-all route for SPA
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
