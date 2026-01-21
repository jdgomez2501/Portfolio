import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import photo_hero from "@/assets/foto_hero.jpg";
import { CONTACT } from "@/config/contact";

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 md:pt-0">

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-radial" />

      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 items-center justify-center animate-fade-in">
            
            {/* Content - Left Side */}
            <div className="space-y-8 text-center lg:-ml-1 flex flex-col justify-center pt-8 md:pt-0">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  Jesús Daniel Gómez
                </h1>
                <p className="text-xl md:text-2xl bg-gradient-primary bg-clip-text text-transparent font-semibold">
                  Mechatronics Engineer - MSc. in Embedded Systems 
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center items-center">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="group" 
                  onClick={() =>
                  (window.location.href = "https://drive.google.com/file/d/1ccRHz6JJq_8VXhW2oUaHONuqmWJYaDvi/view?usp=sharing")
                  }
                >
                  <Download className="mr-2 h-4 w-4" />
                  CV in English
                </Button>

                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="group"
                  onClick={() =>
                  (window.location.href = "https://drive.google.com/file/d/1Qua77zAj-bVpIG1Bc4PvE7kxguxPem5B/view?usp=sharing")
                  }
                >
                  <Download className="mr-2 h-4 w-4" />
                  CV in French
                </Button>
                <Button size="lg" variant="secondary"  onClick={() => scrollToSection("#contact")}>
                  Contact Info
                </Button>
              </div>

              <div className="flex gap-4 justify-center">
                <a 
                  href={CONTACT.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-8 w-8 text-foreground" />
                </a>
                <a 
                  href={CONTACT.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                  aria-label="Github profile"
                >
                  <Github className="h-8 w-8 text-foreground" />
                </a>
              </div>
            </div>
            {/* Profile Photo - Right Side */}
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-muted overflow-hidden shadow-lg">
                <img 
                  src={photo_hero} 
                  alt="Jesus Daniel Gomez"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;