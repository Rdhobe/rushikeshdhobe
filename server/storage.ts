import { users, messages, projects, siteInfo, type User, type InsertUser, type Message, type InsertMessage, type Project, type InsertProject, type SiteInfo, type InsertSiteInfo } from "../shared/schema.js";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { eq } from "drizzle-orm";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const { Pool } = pg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read CA certificate if it exists
let ca: string | undefined;
const caPath = path.resolve(__dirname, "..", "ca.pem");
if (fs.existsSync(caPath)) {
  ca = fs.readFileSync(caPath, "utf8");
}

export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL,
  ssl: ca
    ? { rejectUnauthorized: true, ca }
    : { rejectUnauthorized: false },
});

export const db = drizzle(pool);

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Messages
  createMessage(message: InsertMessage): Promise<Message>;
  getMessages(): Promise<Message[]>;
  deleteMessage(id: number): Promise<void>;

  // Projects
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project>;
  deleteProject(id: number): Promise<void>;

  // Site Info
  getSiteInfo(): Promise<SiteInfo[]>;
  getSiteInfoByKey(key: string): Promise<SiteInfo | undefined>;
  updateSiteInfo(key: string, value: string): Promise<SiteInfo>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }

  async getMessages(): Promise<Message[]> {
    return await db.select().from(messages).orderBy(messages.id);
  }

  async deleteMessage(id: number): Promise<void> {
    await db.delete(messages).where(eq(messages.id, id));
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(projects.id);
  }

  async getProject(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db.insert(projects).values(insertProject).returning();
    return project;
  }

  async updateProject(id: number, update: Partial<InsertProject>): Promise<Project> {
    const [project] = await db.update(projects).set(update).where(eq(projects.id, id)).returning();
    if (!project) throw new Error("Project not found");
    return project;
  }

  async deleteProject(id: number): Promise<void> {
    await db.delete(projects).where(eq(projects.id, id));
  }

  async getSiteInfo(): Promise<SiteInfo[]> {
    return await db.select().from(siteInfo);
  }

  async getSiteInfoByKey(key: string): Promise<SiteInfo | undefined> {
    const [info] = await db.select().from(siteInfo).where(eq(siteInfo.key, key));
    return info;
  }

  async updateSiteInfo(key: string, value: string): Promise<SiteInfo> {
    const [info] = await db
      .insert(siteInfo)
      .values({ key, value })
      .onConflictDoUpdate({
        target: siteInfo.key,
        set: { value },
      })
      .returning();
    return info;
  }
}

export const storage = new DatabaseStorage();
