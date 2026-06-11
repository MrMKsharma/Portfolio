
import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  // Close mobile menu if window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 shadow-sm backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="#" className="flex items-center text-xl font-manrope font-bold animate-slide-in">
          <img src="/Manish_logo.png" alt="Manish Sharma Logo" className="h-8 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-accent transition-colors duration-200 font-medium"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background z-30 flex flex-col items-center justify-center transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl font-medium"
              onClick={() => {
                toggleMobileMenu();
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
