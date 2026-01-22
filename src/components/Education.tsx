import { GraduationCap } from "lucide-react";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Master in Embedded Systems and Robotics (Double Degree)",
    institution: "Institut Polytechnique des Sciences Avancées (IPSA)",
    period: "2023 - 2025",
    city: "Ivry-sur-Seine, France",
    description: "Completed advanced coursework and project work in real-time embedded systems, multi-agent and swarm robotics, FPGA-based design, system identification and control, and flight dynamics and autopilot systems."
  },
  {
    degree: "Bachelor of Science in Mechatronics Engineering (Double Degree)",
    institution: "Universidad EIA",
    period: "2018 - 2025",
    city: "Envigado, Colombia",
    description: "Designed and developed robotics and automation projects with strong emphasis on prototyping and mechatronic systems. Work included end-to-end mechatronic design (from client requirements to functional prototypes), analog and digital control of dynamic systems, industrial automation and instrumentation, and robotics-oriented electronics."
  },
];

const Education = () => {
  return (
    <section className="py-24 relative" id="education">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Academic Path</h2>
            <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
          </motion.div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-surface border border-border">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground">{item.degree}</h3>
                      <p className="text-primary font-medium">{item.institution}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.city}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.period}</p>
                      <p className="text-muted-foreground mt-3">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
