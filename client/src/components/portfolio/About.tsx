import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cloud, Rocket, Smartphone, Code, Workflow } from "lucide-react";

export function About() {
  const services = [
    {
      icon: <Brain className="w-10 h-10 text-primary" />,
      title: "AI / ML Engineering",
      desc: "LLMs, agents, NLP, and automation workflows using OpenAI and custom models."
    },
    {
      icon: <Cloud className="w-10 h-10 text-primary" />,
      title: "Cloud Engineering",
      desc: "Scalable architecture on AWS & RunPod. Model deployment and monitoring."
    },
    {
      icon: <Rocket className="w-10 h-10 text-primary" />,
      title: "Product Management",
      desc: "Taking ideas from concept to MVP to production with rapid iteration."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-primary" />,
      title: "Flutter Development",
      desc: "Cross-platform mobile apps for Android and iOS with native performance."
    },
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: "Python Backend",
      desc: "Robust APIs with FastAPI/Flask, data pipelines, and automation scripts."
    },
    {
      icon: <Workflow className="w-10 h-10 text-primary" />,
      title: "Automation Design",
      desc: "End-to-end workflow automation using n8n, webhooks, and integrations."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Engineering the Future <br />
              <span className="text-primary">One Line of Code at a Time</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I am a Senior Full-Stack Developer and UI/UX Designer at Shakkti AI, based in India. 
              My passion lies in bridging the gap between complex AI technologies and intuitive user experiences.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With a startup mindset, I focus on real-world execution—taking products from messy ideas 
              to scalable, production-ready solutions. Whether it's architecting cloud infrastructure, 
              training LLM agents, or building pixel-perfect mobile apps, I deliver end-to-end value.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full" />
            <div className="relative z-10 grid grid-cols-2 gap-6">
              <div className="space-y-6 translate-y-12">
                <div className="glass-card p-8 rounded-3xl text-center">
                  <span className="text-5xl font-bold text-foreground block">5+</span>
                  <span className="text-sm font-medium text-muted-foreground">Years Exp.</span>
                </div>
                <div className="glass-card p-8 rounded-3xl text-center bg-primary/5 border-primary/20">
                  <span className="text-5xl font-bold text-primary block">20+</span>
                  <span className="text-sm font-medium text-muted-foreground">Projects</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="glass-card p-8 rounded-3xl text-center bg-primary/5 border-primary/20">
                  <span className="text-5xl font-bold text-primary block">10+</span>
                  <span className="text-sm font-medium text-muted-foreground">Clients</span>
                </div>
                <div className="glass-card p-8 rounded-3xl text-center">
                  <span className="text-5xl font-bold text-foreground block">100%</span>
                  <span className="text-sm font-medium text-muted-foreground">Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="services">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold font-display mb-4">What I Do</h2>
            <p className="text-muted-foreground">Combining technical expertise with product vision</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card h-full border-0 bg-transparent">
                  <CardContent className="p-8">
                    <div className="mb-6 p-4 bg-primary/10 rounded-2xl inline-block">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
