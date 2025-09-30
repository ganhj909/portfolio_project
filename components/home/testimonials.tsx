"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  image?: string;
  relation: string;
  date: string;
  url:string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "denis",
    name: "Denis Varennikov",
    position: "Backend Developer with strong communication",
    relation: "Project manager",
    date: "July 1, 2024",
    url: "/images/project_manager.jpg",
    quote: "I am a Senior Backend Developer with over 7 years of experience designing and building scalable, secure, and high-performance backend systems. My expertise lies in architecting APIs, managing complex databases, and ensuring seamless communication between applications and services."
  },
  {
    id: "hira",
    name: "Hira Nguyen",
    position: "Frontend Developer providing visually appealing, responsive, and interactive interfaces",
    relation: "Designer",
    date: "May 23, 2024",
    url: "/images/designer.jpg",
    quote: "I am a Frontend Developer passionate about creating modern, responsive, and user-friendly web applications. With strong expertise in React, Next.js, and JavaScript/TypeScript, I specialize in translating design concepts into functional, high-performing interfaces that deliver seamless user experiences."
  },
  {
    id: "gabriel",
    name: "Gabriel Castillo",
    position: "Full Stack Web Developer with expertise in both frontend and backend technologies",
    relation: "Developer",
    date: "May 2, 2024",
    url: "/images/developer1.jpg",
    quote: "I am a Full-Stack Web Developer with experience in designing, building, and maintaining end-to-end web applications. I specialize in creating modern, responsive, and scalable solutions that bridge the gap between user-facing interfaces and server-side functionality."
  },
  {
    id: "muhamad",
    name: "Muhamad Zainal",
    position: "Mobile developer focus on clean, maintainable code",
    relation: "Developer",
    date: "June 5, 2024",
    url: "/images/developer2.jpg",
    quote: "I am a Mobile Developer specializing in building high-performance, user-friendly mobile applications for both iOS and Android platforms. With expertise in React Native, Flutter, and native development (Swift/Kotlin), I design and implement apps that deliver smooth, responsive experiences for users."
  },
  {
    id: "waleed",
    name: "Waleed Akhtar",
    position: "Database developer focuses on schema design, query optimization, and data migration",
    relation: "DB Manager",
    date: "March 17, 2024",
    url: "/images/db_manager.jpg",
    quote: "I am a Database Developer specializing in designing, implementing, and maintaining robust, efficient, and secure databases that power modern applications. I have expertise in both relational (SQL) and non-relational (NoSQL) databases, ensuring data integrity, performance optimization, and seamless integration with backend systems."
  }
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">      
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Full Stack Agency Developers
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Project manager, designer, developers and DB managxer
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  
                  <p className="italic text-muted-foreground mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage src={testimonial.url} alt={testimonial.name.charAt(0)} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.relation} • {testimonial.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}