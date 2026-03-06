import { motion } from "framer-motion";
import { Gamepad2, Copy, Check } from "lucide-react";
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
    <div className="flex min-h-screen items-center justify-center pt-28 pb-16">
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

          {/* Cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Discord card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-border bg-card p-8 card-hover"
            >
              <svg className="mx-auto mb-4 h-10 w-10" viewBox="0 0 127.14 96.36" fill="none">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" fill="#5865F2"/>
              </svg>
              <h2 className="mb-1 font-display text-lg font-bold tracking-wider">Discord</h2>
              <p className="mb-4 text-2xl font-bold text-primary text-glow">kairodevelops</p>
              <p className="mb-6 text-xs text-muted-foreground">ID: 1389183343064514630</p>

              <div className="flex items-center justify-center gap-3 flex-wrap">
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

            {/* Roblox card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="rounded-xl border border-border bg-card p-8 card-hover flex flex-col items-center justify-center"
            >
              <Gamepad2 className="mb-4 h-10 w-10 text-accent" />
              <h2 className="mb-1 font-display text-lg font-bold tracking-wider">Roblox</h2>
              <Button asChild variant="link" className="text-accent hover:text-accent font-bold text-2xl">
                <a
                  href="https://www.roblox.com/users/profile?username=daantjespower"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  daantjespower
                </a>
              </Button>
            </motion.div>
          </div>
      </div>
    </div>
  );
};

export default Contact;
