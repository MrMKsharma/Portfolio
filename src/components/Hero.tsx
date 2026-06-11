
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  // Simple typing effect for the role text
  useEffect(() => {
    const roles = ['Backend Developer', 'Cloud Engineer', 'DevOps Specialist', 'AI Enthusiast'];
    const roleElement = document.getElementById('role-text');
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let pauseDuration = 1500;

    const type = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        currentCharIndex++;
        typingSpeed = 100;
      }

      if (roleElement) {
        roleElement.textContent = currentRole.substring(0, currentCharIndex);
      }

      if (!isDeleting && currentCharIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = pauseDuration;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      }

      setTimeout(type, typingSpeed);
    };

    // Start typing effect
    setTimeout(type, 1000);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <span className="text-accent font-medium mb-2 block animate-fade-in">Hello, I'm</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Manish Sharma
          </h1>
          <div className="h-8 mb-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <span id="role-text" className="text-foreground/70 text-xl md:text-2xl"></span>
            <span className="inline-block w-0.5 h-5 bg-accent ml-1 animate-pulse-light"></span>
          </div>
          <p className="text-foreground/80 mb-8 max-w-md leading-relaxed animate-fade-in" style={{ animationDelay: '600ms' }}>
            Motivated DevOps and Backend Engineer passionate about cloud technologies, automation, scalable infrastructure, and AI-powered development workflows. Experienced in AWS, Docker, Kubernetes, Terraform, CI/CD, and modern backend development using Go and Python.
          </p>
          <div className="flex space-x-4 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <Button onClick={scrollToProjects} className="group">
              View My Work
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={16} />
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>

        {/* Hero Image or Illustration */}
        <div className="lg:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '1000ms' }}>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center">
              <div className="w-60 h-60 md:w-76 md:h-76 rounded-full overflow-hidden border-4 border-background">
                <img
                  src="Manish_Sharma_profile_pic.png"
                  alt="Manish Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-2 rounded-full font-medium">
              Available for work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
