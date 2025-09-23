// components/home/hero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane, FaTwitter} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { socialLinks } from "@/data/social";

export function Hero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const displayedSkills = [
    "Full Stack Agency",
    "Frontend Developer",
    "Web3 Developer",
    "UI/UX Designer"
  ];

  // Parallax effect setup
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]); // Text moves slower
  const y2 = useTransform(scrollY, [0, 500], [0, 250]); // Image moves faster

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % displayedSkills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Get icon component for social links
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Github className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "mail":
        return <Mail className="h-5 w-5" />;
      case "phone":
        return <Phone className="h-5 w-5" />;
      case "whatsapp":
        return <FaWhatsapp className="h-5 w-5" />;
      case "telegram":
        return <FaTelegramPlane className="h-5 w-5" />;
      case "twitter":
        return <FaTwitter className="h-5 w-5" />
      default:
        return null;
    }
  };

  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      {/* Background elements with parallax effect */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: useTransform(scrollY, [0, 1000], [0, 300]) }}
      >
        <div className="absolute right-0 top-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-70" />
        <div className="absolute left-20 bottom-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-60" />
      </motion.div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div 
            className="flex flex-col justify-center space-y-4"
            style={{ y: y1 }}
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I&apos;m Gan Hong Jian
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="h-12"
              >
                <div className="relative overflow-hidden h-full flex items-center">
                  {displayedSkills.map((skill, index) => (
                    <div
                      key={skill}
                      className={`absolute transition-all duration-500 transform ${
                        index === currentSkillIndex
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                    >
                      <h2 className="text-2xl font-semibold text-primary sm:text-3xl">
                        {skill}
                      </h2>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                A passionate Frontend Developer and Full Stack Agency with expertise in Next.js, React, Vue.js, Tailwind CSS, 
                blockchain technologies and assistance. As a Full Stack agency, providing end-to-end solutions — from design 
                and prototyping to deployment and long-term support.
              </motion.p>
            </div>
            
            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="group">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="/resume.pdf" 
                  download="Gan_Hong_Jian_Frontend_Resume.pdf" 
                  target="_blank"                      
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>
            
            {/* Social Links - Added here from navbar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-3 pt-2"
            >
              {socialLinks.map((social) => (
                <motion.div
                  key={social.id}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="rounded-full bg-muted/50 hover:bg-primary/10"
                  >
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      {getIconComponent(social.icon)}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="flex items-center justify-center"
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-full">
              <Image
                src="/images/profile.jpg"
                alt="Gan Hong Jian"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}