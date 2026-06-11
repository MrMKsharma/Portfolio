import React, { useEffect } from 'react';
import { Star, Trophy, Code2, Users, ExternalLink } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Microsoft Learn Student Ambassador',
      subtitle: 'MLSA Beta Student Ambassador',
      icon: Star,
      borderColor: 'border-l-blue-500',
      color: 'text-blue-400',
      link: 'https://mvp.microsoft.com/en-US/studentambassadors/profile/a245527c-083e-4892-ae81-ae50b8ed2a94'
    },
    {
      title: 'Hackathons',
      subtitle: 'Winner — SPHINX Hackathon 2024 (MNIT Jaipur)',
      description: 'Top 5 — Smart India Hackathon Prelims',
      icon: Trophy,
      borderColor: 'border-l-purple-500',
      color: 'text-purple-400',
      link: 'https://www.linkedin.com/posts/manishsharma31_ai-ml-hackathonwinner-activity-7262096259501481984-uE62?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECVW8QBI_VbAgQn2J1WgP9LkzW6jihWPvo'
    },
    {
      title: 'Open Source',
      subtitle: 'Hacktoberfest Super Contributor',
      icon: Code2,
      borderColor: 'border-l-green-500',
      color: 'text-green-400',
      link: 'https://www.holopin.io/hacktoberfest2025/userbadge/cmgjhm4fj009jl70413zrky20'
    },
    {
      title: 'Community',
      items: [
        'Technical Workshops',
        'Cloud Community Events',
        'Student Leadership Activities'
      ],
      icon: Users,
      borderColor: 'border-l-cyan-500',
      color: 'text-cyan-400'
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
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Achievements & Activities</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <a
                key={achievement.title}
                href={achievement.link}
                target={achievement.link ? '_blank' : undefined}
                rel={achievement.link ? 'noopener noreferrer' : undefined}
                className={`border-l-4 ${achievement.borderColor} bg-secondary/30 backdrop-blur-sm border border-l-4 rounded-lg p-6 hover:bg-secondary/50 transition-all duration-300 fade-in ${achievement.link ? 'cursor-pointer group' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4 mb-4 justify-between items-start">
                  <div className="flex gap-4 flex-1">
                    <div className={`w-10 h-10 rounded-lg bg-secondary/60 flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    <h3 className="text-lg font-bold">{achievement.title}</h3>
                  </div>
                  {achievement.link && (
                    <ExternalLink className={`w-5 h-5 ${achievement.color} flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform`} />
                  )}
                </div>

                {achievement.subtitle && (
                  <>
                    <p className="text-purple-400 font-medium mb-2">{achievement.subtitle}</p>
                    {achievement.description && (
                      <p className="text-foreground/70 text-sm mb-2">{achievement.description}</p>
                    )}
                  </>
                )}

                {achievement.items && (
                  <ul className="space-y-2">
                    {achievement.items.map((item, idx) => (
                      <li key={idx} className="text-foreground/70 text-sm flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${achievement.color}`}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
