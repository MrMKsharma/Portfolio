import React, { useEffect } from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'DevOps Engineer Intern',
      company: 'SukhPragya Software Pvt. Ltd.',
      year: '2025',
      icon: Briefcase,
      achievements: [
        'Built and optimized GitLab CI/CD Pipelines for seamless application delivery.',
        'Managed and scaled AWS Infrastructure components.',
        'Implemented Terraform Automation to standardize infrastructure provisioning.',
        'Administered Kubernetes Clusters ensuring high availability and fault tolerance.',
        'Improved Deployment Efficiency by 90% through end-to-end automation.'
      ]
    }
  ];

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
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="max-w-3xl fade-in">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={exp.company}
                className="relative fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline */}
                <div className="flex gap-6">
                  {/* Timeline line and icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-cyan-500 bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </div>
                    {index < experiences.length - 1 && (
                      <div className="w-1 h-32 bg-gradient-to-b from-cyan-500 to-transparent mt-4"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-12 flex-grow">
                    <div className="bg-secondary/30 backdrop-blur-sm border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-xl font-bold">{exp.role}</h3>
                          <p className="text-purple-400 font-medium">{exp.company}</p>
                        </div>
                        <span className="text-cyan-400 font-semibold">{exp.year}</span>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex gap-3 text-foreground/70 text-sm">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
