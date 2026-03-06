import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Gamepad2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { label: "Roblox Username", value: "daantjespower" },
  { label: "Specialty", value: "Scripting" },
  { label: "Language", value: "Luau" },
];

const highlights = [
  { icon: Code, title: "Custom Scripts", desc: "Clean, optimized Luau code tailored to your game's needs." },
  { icon: Gamepad2, title: "Game Systems", desc: "Combat, inventory, UI frameworks and more — built from scratch." },
  { icon: Zap, title: "Fast Delivery", desc: "Quick turnaround without sacrificing quality or performance." },
];

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 font-display text-sm tracking-[0.3em] uppercase text-primary"
        >
          Roblox Developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 font-display text-6xl md:text-8xl font-black tracking-tight gradient-text"
        >
          KAIRO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mx-auto mb-8 max-w-lg text-lg text-muted-foreground"
        >
          Professional Roblox scripting & development. Bringing your game ideas to life with clean, performant code.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="font-display tracking-wider border-glow">
            <Link to="/contact">Hire Me</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-display tracking-wider border-primary/30 hover:border-primary hover:bg-primary/10">
            <Link to="/skills">My Skills</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Stats bar */}
    <section className="border-y border-border bg-card/50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center py-8">
            <span className="font-display text-xs tracking-widest uppercase text-muted-foreground">{s.label}</span>
            <span className="mt-1 font-display text-lg font-bold text-primary text-glow">{s.value}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Highlights */}
    <section className="container mx-auto px-4 py-24">
      <h2 className="mb-12 text-center font-display text-3xl font-bold tracking-wider gradient-text">
        What I Do
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-lg border border-border bg-card p-8 card-hover"
          >
            <h.icon className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-2 font-display text-lg font-bold tracking-wide">{h.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Index;
