import { motion } from "framer-motion";
import { MessageCircle, Gamepad2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyDiscord = () => {
    navigator.clipboard.writeText("kairodevelops");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center pt-16 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-lg text-center"
        >
          <p className="mb-2 font-display text-sm tracking-[0.3em] uppercase text-primary">Get In Touch</p>
          <h1 className="mb-4 font-display text-4xl md:text-5xl font-black tracking-tight gradient-text">
            Contact Me
          </h1>
          <p className="mb-12 text-muted-foreground">
            Ready to level up your Roblox game? Reach out on Discord — it's the fastest way to get a response.
          </p>

          {/* Discord card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-border bg-card p-8 card-hover mb-8"
          >
            <MessageCircle className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2 className="mb-1 font-display text-lg font-bold tracking-wider">Discord</h2>
            <p className="mb-4 text-2xl font-bold text-primary text-glow">kairodevelops</p>
            <p className="mb-6 text-xs text-muted-foreground">ID: 1389183343064514630</p>

            <div className="flex items-center justify-center gap-3">
              <Button onClick={copyDiscord} className="font-display tracking-wider border-glow gap-2">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy Username"}
              </Button>
              <Button asChild variant="outline" className="font-display tracking-wider border-primary/30 hover:border-primary hover:bg-primary/10">
                <a
                  href="https://discord.com/users/1389183343064514630"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Profile
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Roblox */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="rounded-xl border border-border bg-card p-6 card-hover"
          >
            <Gamepad2 className="mx-auto mb-3 h-8 w-8 text-accent" />
            <h2 className="mb-1 font-display text-sm font-bold tracking-wider">Roblox</h2>
            <Button asChild variant="ghost" className="text-accent hover:text-accent font-bold">
              <a
                href="https://www.roblox.com/users/profile?username=daantjespower"
                target="_blank"
                rel="noopener noreferrer"
              >
                daantjespower
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
