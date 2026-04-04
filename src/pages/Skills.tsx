import { motion } from "framer-motion";
import { Code, Database, Cpu, ShieldCheck, Video, Globe, ExternalLink } from "lucide-react";

const skills = [
  { icon: Code, name: "Luau / Lua", level: 95 },
  { icon: Database, name: "DataStore / ProfileService", level: 90 },
  { icon: Cpu, name: "Game Systems & Frameworks", level: 88 },
  { icon: Globe, name: "Website Development", level: 82 },
  { icon: ShieldCheck, name: "Anti-Exploit / Security", level: 80 },
];

const videos: { title: string; videoUrl: string; category?: string; subtitle?: string }[] = [
  { title: "Car Chassi(s)", videoUrl: "/videos/car-chassis.mp4" },
  { title: "Discord Bot", subtitle: "Moderation", videoUrl: "/videos/discord-bot-moderation.mp4", category: "Discord Bots" },
];

const websites = [
  {
    title: "FuxionBuildz Portfolio",
    description: "A portfolio website created for a client — showcasing their Roblox development & 3D art work.",
    url: "https://fuxionbuildz.github.io/",
    tags: ["React", "Portfolio", "Client Work"],
    image: "/images/fuxionbuildz-preview.png",
  },
  {
    title: "RoTerminal",
    description: "A real-time Roblox limited item tracker — browse catalog, search inventories, and monitor market trends.",
    url: "https://roterminal.github.io/",
    tags: ["React", "Market Tracker", "Client Work"],
    image: "/images/roterminal-preview.png",
  },
  {
    title: "Vexa",
    description: "Fully Automated Crypto MiddleMan",
    url: "https://vexa.ink/",
    tags: ["Crypto", "Automation"],
    image: "/images/vexa-preview.png",
  },
];

const Skills = () => (
  <div className="min-h-screen pt-24 pb-16">
    <div className="container mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <p className="mb-2 font-display text-sm tracking-[0.3em] uppercase text-primary">Expertise</p>
        <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight gradient-text">
          My Skills
        </h1>
      </motion.div>

      {/* Skill bars */}
      <div className="mx-auto max-w-2xl space-y-6 mb-24">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="flex items-center gap-2 font-display text-sm tracking-wider">
                <skill.icon className="h-4 w-4 text-primary" />
                {skill.name}
              </span>
              <span className="font-display text-xs text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, hsl(195 100% 50%), hsl(270 80% 60%))",
                  boxShadow: "0 0 12px hsl(195 100% 50% / 0.4)",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video section */}
      <div className="neon-line mx-auto mb-16 max-w-xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <Video className="mx-auto mb-3 h-8 w-8 text-primary" />
        <h2 className="font-display text-3xl font-bold tracking-wider gradient-text">Showcase Videos</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {videos.length === 0 ? "Videos coming soon — stay tuned!" : "Check out my latest work"}
        </p>
      </motion.div>

      {videos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-4xl">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="overflow-hidden rounded-lg border border-border bg-card card-hover"
            >
              <div className="aspect-video">
                <video
                  src={video.videoUrl}
                  controls
                  className="h-full w-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-sm font-bold tracking-wider">{video.title}</h3>
                {video.subtitle && (
                  <p className="text-[10px] text-muted-foreground tracking-wider mt-0.5">{video.subtitle}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-md rounded-lg border border-dashed border-border bg-card/50 p-12 text-center">
          <Video className="mx-auto mb-3 h-10 w-10 text-muted-foreground/40" />
          <p className="font-display text-xs tracking-widest uppercase text-muted-foreground">
            Coming soon
          </p>
        </div>
      )}

      {/* Website showcase section */}
      <div className="neon-line mx-auto my-16 max-w-xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <Globe className="mx-auto mb-3 h-8 w-8 text-primary" />
        <h2 className="font-display text-3xl font-bold tracking-wider gradient-text">Websites</h2>
        <p className="mt-2 text-sm text-muted-foreground">Web projects I've built for clients</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-4xl">
        {websites.map((site, i) => (
          <motion.a
            key={i}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group overflow-hidden rounded-lg border border-border bg-card card-hover block"
          >
            <div className="aspect-video overflow-hidden bg-secondary">
              <img
                src={site.image}
                alt={site.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-sm font-bold tracking-wider">{site.title}</h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-xs text-muted-foreground mb-3">{site.description}</p>
              <div className="flex flex-wrap gap-2">
                {site.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-secondary px-2.5 py-0.5 font-display text-[10px] tracking-wider text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
