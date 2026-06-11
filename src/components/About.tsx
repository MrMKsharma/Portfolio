
import React, { useEffect } from 'react';
import { Download, Cloud, Cog, Code, Database, BarChart3, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  // Tech Stack data
  const techStack = [
    {
      category: 'Cloud',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      borderColor: 'border-l-cyan-500',
      skills: ['AWS', 'Terraform', 'Infrastructure as Code']
    },
    {
      category: 'DevOps',
      icon: Cog,
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-l-cyan-400',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'GitHub Actions']
    },
    {
      category: 'Programming',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-l-purple-500',
      skills: ['Go (Golang)', 'Python']
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-l-green-500',
      skills: ['MongoDB', 'MySQL']
    },
    {
      category: 'Monitoring',
      icon: BarChart3,
      color: 'from-cyan-400 to-blue-400',
      borderColor: 'border-l-cyan-400',
      skills: ['Grafana', 'Prometheus']
    },
    {
      category: 'Tools',
      icon: Wrench,
      color: 'from-purple-400 to-pink-400',
      borderColor: 'border-l-purple-500',
      skills: ['Git', 'GitHub', 'Cursor', 'GitHub Copilot', 'ChatGPT', 'Claude AI']
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Column */}
          <div className="lg:w-1/3 fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-lg"></div>
              <img 
                src="Manish_Sharma_profile_pic.png" 
                alt="About me" 
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 fade-in">About Me</h2>
            <p className="text-foreground/70 mb-6 fade-in">
              I am a B.Tech Information Technology student and aspiring Cloud & DevOps Engineer with hands-on experience in designing scalable infrastructure, automating deployment pipelines, and building backend systems.
            </p>
            
            <div className="mb-8 fade-in">
              <p className="mb-4">
                My expertise spans cloud platforms, container orchestration, Infrastructure as Code, monitoring systems, and AI-assisted development. I enjoy solving real-world engineering problems through automation and modern software practices.
              </p>
            </div>
            
            {/* Tech Stack */}
            <div className="mb-8 fade-in">
              <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techStack.map((stack, index) => {
                  const IconComponent = stack.icon;
                  return (
                    <div 
                      key={stack.category}
                      className={`border-l-4 ${stack.borderColor} bg-secondary/30 p-6 rounded-lg backdrop-blur-sm fade-in hover:bg-secondary/50 transition-colors`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <IconComponent className="w-6 h-6" />
                        <h4 className="text-lg font-semibold">{stack.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {stack.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-secondary/60 text-sm rounded-full border border-foreground/10 hover:border-foreground/30 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Resume Button */}
            <div className="fade-in">
              <Button 
                className="group" 
                onClick={() => window.open('/ManishSharma_Resume.pdf', '_blank')}
                aria-label="Get Resume"
              >
                <Download className="mr-2 group-hover:-translate-y-1 transition-transform" size={16} />
                Get Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
