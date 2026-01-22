import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Intern Multi-Agent Autonomous Systems Engineer",
    company: "ALTEN",
    location: "Sèvres, France",
    period: "02/2025 - 08/2025",
    description: ["Developed embedded C firmware for ESP32 implementing multi-task real-time data acquisition, using FreeRTOS vTasks to guarantee deterministic execution of sensing, display refresh and communication routines.",
      "Contributed to large-scale system testing, logging, and performance validation in the context of the development of challenge SWARMZ4, a competition for collaborative drone control strategies, using Gazebo, ROS2, and PX4 Autopilot.",
      "Integrated a temperature/humidity sensor via I2C, with data processing and transmission over Wi-Fi using the Zenoh distributed communication protocol for low-latency telemetry.",
      "Implemented internal and external communication for a heterogeneous fleet of robots through the integration of the Zenoh protocol (Wi-Fi, DDS, TCP/IP, UDP/IP).",
      "Worked on ROS2-based modular node design, testing and debugging communication layers within simulation and hardware environments."
    ],
    technologies: ["Mobile Robots", "ROS2", "Python","C","FreeRTOS", "Zenoh", "Nav2", "Gazebo","PX4 Autopilot"],
  },
  {
    id: 2,
    title: "Research Intern – Control Systems Engineering",
    company: "IPSA",
    location: "Ivry-sur-Seine, France",
    period: "06/2024 - 08/2024",
    description: ["Developed real-time data acquisition and signal-processing for IMU sensor (MPU6050) using I2C and filtering (complementary filter).",
      "Modeled and simulated control loops (motor speed and pitch angle) using MATLAB/Simulink, validating system behavior under timing and noise constraints.",
      "Tuned and deployed control algorithms on embedded hardware, ensuring deterministic response and stability.",
      "Conducted literature analysis of control strategies (PID, SMC) with emphasis on robustness, implementation complexity, and hardware resource constraints.",
      "Designed and tested new mechanical structures to improve the stability of the system"
    ],
    technologies: ["Matlab", "Simulink", "Inventor", "SPI", "I2C", "Arduino","Fast prototyping","C","Multithreading"],
  },
  {
    id: 3,
    title: "Intern – Maintenance, Process improvement & Reliability Engineer",
    company: "Avianca",
    location: "Medellin, Colombia",
    period: "08/2022 - 02/2023",
    description: ["Designed and automatically updated a performance dashboard to monitor KPIs and support daily operational diagnostics.",
      "Automated repetitive processes to extract and deliver the data required by the reliability and maintenance teams.",
      "Analyzed reports on unused materials in maintenance operations and proposed process improvement initiatives."
    ],
    technologies: ["SQL", "Data wrangling", "Skywise", "Data analysis", "AMOS", "Excel", "Pack office","Communication skills",],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const }
  }
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-primary-foreground" />
              </div>

              <div className="bg-card border border-border rounded-lg p-6 ml-4 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
                    <span className="flex items-center gap-1 md:justify-end">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 md:justify-end">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
                  {Array.isArray(exp.description) ? (
                    exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))
                  ) : (
                    <li>{exp.description}</li>
                  )}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
