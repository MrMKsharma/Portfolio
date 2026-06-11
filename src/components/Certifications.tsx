import React, { useEffect } from 'react';
import { Shield } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'GitHub Foundations',
      issuer: 'GitHub',
      icon: Shield
    },
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services',
      icon: Shield
    },
    {
      title: 'AWS Cloud Quest: Cloud Practitioner',
      issuer: 'Amazon Web Services',
      icon: Shield
    },
    {
      title: 'Microsoft Azure AI Engineer Associate (AI-102)',
      issuer: 'Microsoft',
      icon: Shield
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
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={cert.title}
                className="bg-secondary/30 backdrop-blur-sm border border-foreground/10 rounded-lg p-6 hover:border-foreground/20 transition-all duration-300 fade-in text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full border-2 border-cyan-500 flex items-center justify-center bg-cyan-500/10">
                    <IconComponent className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-sm leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-foreground/60">{cert.issuer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
