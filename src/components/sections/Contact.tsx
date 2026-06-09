"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-muted/5 border-t border-border/50">
      <div className="container mx-auto px-6">
        <SectionHeading title="Get In Touch" subtitle="Have a project in mind? Let's talk." />
        <div className="grid md:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Let's build something great.</h3>
              <p className="text-muted-foreground text-lg">I am currently open to new opportunities. Reach out!</p>
            </div>
            <div className="space-y-4">
              <SpotlightCard className="p-4 flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary"><Mail size={24} /></div>
                <div><p className="text-sm text-muted-foreground font-medium">Email</p><p className="text-foreground font-semibold">{portfolioData.personal.email}</p></div>
              </SpotlightCard>
              <SpotlightCard className="p-4 flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary"><MapPin size={24} /></div>
                <div><p className="text-sm text-muted-foreground font-medium">Location</p><p className="text-foreground font-semibold">{portfolioData.personal.location}</p></div>
              </SpotlightCard>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0.2 }}>
            <SpotlightCard className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2"><label className="text-sm font-medium text-foreground">Name</label><Input placeholder="Maximus" className="bg-background/50 border-border/50 focus:border-primary" /></div>
                  <div className="space-y-2"><label className="text-sm font-medium text-foreground">Email</label><Input type="email" placeholder="Dufas@wide.com" className="bg-background/50 border-border/50 focus:border-primary" /></div>
                </div>
                <div className="space-y-2"><label className="text-sm font-medium text-foreground">Subject</label><Input placeholder="Project Inquiry" className="bg-background/50 border-border/50 focus:border-primary" /></div>
                <div className="space-y-2"><label className="text-sm font-medium text-foreground">Message</label><Textarea placeholder="Tell me about your project..." className="min-h-[150px] bg-background/50 border-border/50 focus:border-primary resize-none" /></div>
                <Button type="submit" className="w-full h-12 text-base font-medium group">Send Message <Send className="ml-2 h-4 w-4" /></Button>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
