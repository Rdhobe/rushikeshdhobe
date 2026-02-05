import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema, insertProjectSchema, insertSiteInfoSchema } from "../shared/schema";
import { ZodError } from "zod";

function isAuthenticated(req: any, res: any, next: any) {
  if (req.isAuthenticated()) return next();
  res.sendStatus(401);
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Messages
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(data);
      res.status(201).json(message);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  app.get("/api/messages", isAuthenticated, async (_req, res) => {
    try {
      const messages = await storage.getMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.delete("/api/messages/:id", isAuthenticated, async (req, res) => {
    try {
      await storage.deleteMessage(parseInt(req.params.id));
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Projects
  app.get("/api/projects", async (_req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.post("/api/projects", isAuthenticated, async (req, res) => {
    try {
      const data = insertProjectSchema.parse(req.body);
      const project = await storage.createProject(data);
      res.status(201).json(project);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  app.patch("/api/projects/:id", isAuthenticated, async (req, res) => {
    try {
      const data = insertProjectSchema.partial().parse(req.body);
      const project = await storage.updateProject(parseInt(req.params.id), data);
      res.json(project);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  app.delete("/api/projects/:id", isAuthenticated, async (req, res) => {
    try {
      await storage.deleteProject(parseInt(req.params.id));
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Site Info
  app.get("/api/site-info", async (_req, res) => {
    try {
      const info = await storage.getSiteInfo();
      res.json(info);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.patch("/api/site-info", isAuthenticated, async (req, res) => {
    try {
      const { key, value } = insertSiteInfoSchema.parse(req.body);
      const info = await storage.updateSiteInfo(key, value);
      res.json(info);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  });

  return httpServer;
}
