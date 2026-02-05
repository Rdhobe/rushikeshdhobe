import { db } from "../server/storage";
import { users, projects, siteInfo } from "../shared/schema";

async function seed() {
    console.log("Seeding database...");

    // Create admin user
    await db.insert(users).values({
        username: "admin",
        password: "admin_password", // In a real app, use hashing!
    }).onConflictDoNothing({ target: users.username });

    // Seed site info
    const info = [
        { key: "hero_title", value: "Building AI-Powered Products for the Future" },
        { key: "hero_subtitle", value: "AI Engineer • Cloud Architect • Product Builder • Flutter Dev" },
        { key: "bio", value: "Passionate about building AI solutions and cloud architecture." },
        { key: "email", value: "rdhobe8@gmail.com" },
        { key: "github", value: "https://github.com/Rdhobe" },
        { key: "linkedin", value: "https://www.linkedin.com/in/rushikesh-dhobe-957b062b7/" },
    ];

    for (const item of info) {
        await db.insert(siteInfo).values(item).onConflictDoUpdate({
            target: siteInfo.key,
            set: { value: item.value }
        });
    }

    // Seed projects
    const initialProjects = [
        {
            title: "AI Political Intelligence Platform",
            description: "A comprehensive dashboard for analyzing political trends using sentiment analysis and LLMs.",
            image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800",
            tags: "Python, NLP, React, D3.js",
            link: "#"
        },
        {
            title: "POS-Led Fintech Platform",
            description: "Modern point-of-sale system for retail businesses with integrated payment processing and inventory.",
            image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=800",
            tags: "Flutter, Node.js, AWS, Stripe",
            link: "#"
        },
        {
            title: "AI Decision Coaching App",
            description: "Personalized coaching assistant that helps users make better decisions using AI agents.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            tags: "Flutter, OpenAI API, Firebase",
            link: "#"
        },
        {
            title: "Flutter ERP System",
            description: "Full-scale enterprise resource planning solution for manufacturing units with real-time tracking.",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
            tags: "Flutter Web, Dart, PostgreSQL",
            link: "#"
        },
        {
            title: "WhatsApp AI Bot with Dashboard",
            description: "Automated customer support bot with a comprehensive analytics dashboard for admins.",
            image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800",
            tags: "WhatsApp API, Python, Flask, React",
            link: "#"
        }
    ];

    // Clear existing and re-seed to ensure a clean state
    await db.delete(projects);
    for (const project of initialProjects) {
        await db.insert(projects).values(project);
    }

    console.log("Seeding complete!");
}

seed().catch(console.error);
