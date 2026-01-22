import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import LogoSlider from "./LogoSlider";
const skillCategories = [
  {
    title: "Programming",
    skills: ["C", "Python", "VHDL", "Verilog", "Bash", "SQL", "Ladder", "Grafcet", "Assembly"]
  },
  {
    title: "Soft Skills",
    skills: ["Problem-solving","Self-learning", "Adaptability", "Proactivity","Critical thinking","Teamwork"]
  },
  {
    title: "Robotics Development",
    skills: ["ROS2", "Linux", "Gazebo", "DDS", "Inventor", "Proteus", "Software-hardware integration","Arduino", "Raspberry Pi", "ESP32",]
  },
  {
    title: "Software & Hardware",
    skills: ["ROS2", "Matlab/Simulink", "Quartus", "Inventor", "Proteus", "Gazebo","Arduino", "Raspberry Pi", "ESP32", "LabView", "Vivado","KiCad"]
  },
  {
    title: "Robotics Development",
    skills: ["FPGA", "Embedded systems", "Microcontrollers", "Data adquisition", "PCB design"]
  },
  {
    title: "COM Protocols",
    skills: ["Wi-Fi", "Bluetooth", "SPI/I2C", "CAN", "UART/USART", "Ethernet", "Zenoh"]
  },
  {
    title: "Coding and collaboration tools",
    skills: ["Git", "Visual Studio", "GitHub","Overleaf", "Pack Office"]
  }
];

const Skills = () => {
  return (
    <section className="py-24 relative" id="skills">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 mb-1 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills & Expertise</h2>
            <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
          </motion.div>
          {/* Logo Slider */}
          <LogoSlider />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                className="p-6 bg-card border-border hover:bg-surface-hover transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm rounded-md bg-surface border border-border text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
