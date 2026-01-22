import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import about_photo from "@/assets/foto_about.jpg";


const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-24 relative" 
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
            <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-lg bg-muted">
                <img 
                  src={about_photo} 
                  alt="About Jesus Daniel Gomez"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed text-justify"
            >
              <p>
                I'm a mechatronics engineer really passionate about robotics and embedded systems with around 5 years of hands-on and R&D experience. 
                I'm originally from Colombia and I have been living in France for almost 3 years. 
              </p>
              
              <p>
                My journey started at Universidad EIA, where I pursued a B.Sc. in Mechatronics Engineering. During my final semesters, I decided to push
                further and enrolled in a double degree program, which brought me to France to complete an M.Sc. in Embedded Systems and Robotics at IPSA.
                In 2025, I successfully graduated from both programs with outstanding academic performance, ready to contribute to meaningful, high-impact engineering projects.
              </p>
              
              <p>
                Beyond the degrees, this international journey has deeply shaped the way I work and think. It strengthened my confidence in robotics environments,
                FPGA-based systems, and hardware/software integration, but also taught me how to collaborate in diverse teams, communicate ideas clearly, and
                learn fast from others. Living in a new country and learning new languages pushed me to become more autonomous, resilient, and adaptable.
              </p>

              <p>
                These experiences did not just sharpen my technical background, they expanded my mindset. I approach engineering as both a technical and human challenge: building
                robust systems, solving real problems, and continuously learning from the people and environments around me.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
