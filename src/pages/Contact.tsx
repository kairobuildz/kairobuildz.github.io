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

          {/* Discord card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-border bg-card p-8 card-hover mb-8"
          >
            <svg className="mx-auto mb-4 h-10 w-10 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"/></svg>
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
            <Button asChild variant="link" className="text-accent hover:text-accent font-bold">
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
