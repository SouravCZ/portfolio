import { Routes, Route, Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { projects, getProjectBySlug } from './projects';
import React, { useState, useEffect, useRef } from 'react';
import SquishSwitch from './SquishSwitch';
import Dock from './Dock';
import { MapPin, Check, GraduationCap, School, Code, ArrowRight, Laptop, Brain, PieChart, Search, Network, Rocket, Quote, Mail, Download, User, FolderGit, Server, Database, Terminal, Cpu } from 'lucide-react';

// --- Reusable Reveal Component ---
const FadeInSection = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// --- Components ---

const Navbar = ({ onConnect }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 bg-offwhite/90 dark:bg-darker/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center text-gray-900 dark:text-white">
        
        {/* Brand */}
        <div className="flex items-center justify-self-start">
          <Link to="/" className="text-xl font-display font-bold tracking-wider uppercase text-gray-900 dark:text-white hover:text-primary transition-colors">
            SouravCZ
          </Link>
        </div>

        {/* Navigation Links - Minimal Apple Crystal Style */}
        <nav className="hidden md:flex justify-self-center items-center space-x-2 p-1 rounded-full bg-white/40 dark:bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/60 dark:border-white/10 shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <a href="/#about" className="px-5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-gray-800 dark:text-gray-200 hover:bg-white/80 dark:hover:bg-white/10 hover:text-primary dark:hover:text-primary transition-all duration-300">ABOUT</a>
          <a href="/#projects" className="px-5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-gray-800 dark:text-gray-200 hover:bg-white/80 dark:hover:bg-white/10 hover:text-primary dark:hover:text-primary transition-all duration-300">PROJECTS</a>
          <a href="/#skills" className="px-5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-gray-800 dark:text-gray-200 hover:bg-white/80 dark:hover:bg-white/10 hover:text-primary dark:hover:text-primary transition-all duration-300">SKILLS</a>
          <a href="/#freelance" className="px-5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-gray-800 dark:text-gray-200 hover:bg-white/80 dark:hover:bg-white/10 hover:text-primary dark:hover:text-primary transition-all duration-300">FREELANCE</a>
        </nav>

        {/* Theme Toggle & CTA */}
        <div className="flex items-center space-x-4 md:space-x-6 justify-self-end">
          <button onClick={onConnect} className="hidden lg:inline text-primary border border-primary px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-primary hover:text-white transition-colors cursor-pointer">Let's Connect</button>
          
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-offwhite dark:bg-darker overflow-hidden transition-colors duration-300">
      {/* Huge Background Text - Fixed watermark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110vw] flex justify-center z-0 pointer-events-none select-none">
        <h1 className="text-[12vw] font-display font-bold text-primary opacity-[0.03] dark:opacity-[0.05] tracking-tighter leading-none m-0 p-0 transition-opacity duration-300 whitespace-nowrap hidden md:block">
          SOURAVCZ
        </h1>
        <h1 className="text-[20vw] font-display font-bold text-primary opacity-[0.03] dark:opacity-[0.05] tracking-tighter leading-none m-0 p-0 transition-opacity duration-300 whitespace-nowrap md:hidden">
          SOURAVCZ
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative flex flex-col md:flex-row items-center justify-between pt-24 md:pt-32 pb-20 z-20 h-full">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-3 md:space-y-4 z-10">
          <h3 className="font-cursive text-primary text-4xl md:text-5xl transform -rotate-2 -ml-2">Hello, I'm</h3>
          {/* Scaled down text to prevent overflow/overlap */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[0.9] uppercase tracking-wide text-gray-900 dark:text-white drop-shadow-sm">
            Sourav<br/>Chakraborty
          </h1>
          <h2 className="text-xl font-display text-gray-800 dark:text-gray-300 uppercase tracking-widest mt-4 mb-6">
            Data Science Student <br/>& Developer
          </h2>
          <p className="text-gray-900 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-sm mt-4 font-medium md:font-normal">
            I build ML models and ship them as working web apps.
          </p>
          <div className="flex items-center text-xs tracking-widest text-gray-700 dark:text-gray-400 uppercase mt-4 md:mt-8 pt-2 md:pt-4">
            <MapPin className="w-5 h-5 text-primary mr-2" /> Based in Kolkata, India
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-8">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-5 py-2.5 rounded-full font-medium tracking-wide hover:bg-primary/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary shadow-lg shadow-primary/20 text-sm">
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Features */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-end text-center md:text-right space-y-8 mt-12 md:mt-0 pl-0 md:pl-8 z-10">
          <div className="flex items-center justify-end w-full">
            <p className="text-gray-800 dark:text-gray-200 text-base max-w-[220px] leading-relaxed font-medium text-center md:text-right">
              Bridging the gap between data science and production web architecture.
            </p>
          </div>
          
          <div className="space-y-6 font-display tracking-wide text-xl md:text-2xl text-gray-900 dark:text-gray-100 text-center md:text-right font-medium">
            <div className="hover:text-primary dark:hover:text-primary transition-colors cursor-default">
               Python · scikit-learn · PyTorch
            </div>
            <div className="hover:text-primary dark:hover:text-primary transition-colors cursor-default">
               React · Node · FastAPI
            </div>
            <div className="hover:text-primary dark:hover:text-primary transition-colors cursor-default">
               Full-Stack ML Systems
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-dark px-6 md:px-12 border-t border-gray-200 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        
        {/* Left Content */}
        <div className="lg:w-5/12 w-full">
          <FadeInSection>
            <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-500 dark:text-gray-400">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white uppercase tracking-wide leading-tight">
              Building <span className="text-primary">Intelligent</span> Solutions.
            </h3>
            <div className="mt-8 space-y-4">
              <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <GraduationCap className="w-6 h-6 text-primary mr-3" />
                B.Tech Data Science (2024 - 2028)
              </div>
              <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <School className="w-6 h-6 text-primary mr-3" />
                Adamas University
              </div>
              <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                <Code className="w-6 h-6 text-primary mr-3" />
                Full-Stack & ML Specialist
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Right Content */}
        <div className="lg:w-7/12 w-full space-y-6 text-gray-700 dark:text-gray-400 text-lg leading-relaxed font-medium md:font-normal">
          <FadeInSection delay={150}>
            <p>
              I am a passionate Data Science student and Full-Stack Developer specializing in bridging the gap between complex machine learning models and scalable, user-friendly web applications.
            </p>
          </FadeInSection>
          <FadeInSection delay={300}>
            <p>
              My philosophy is simple: technology should solve real-world problems. Whether I'm building predictive analytics engines, developing robust AI decision support systems, or crafting seamless full-stack interfaces, my focus is always on creating impactful digital experiences.
            </p>
          </FadeInSection>
          <FadeInSection delay={450}>
            <p>
              Beyond writing clean, efficient code, I am continuously exploring emerging technologies in artificial intelligence, neural networks, and modern web frameworks to push the boundaries of what's possible on the web.
            </p>
          </FadeInSection>
        </div>
        
      </div>
    </section>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark px-4 md:px-8 border-t border-gray-200 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-sm font-bold tracking-widest uppercase mb-12 text-gray-500 dark:text-gray-400">Selected Projects</h2>
        </FadeInSection>
        
        <div className="relative w-full flex flex-col gap-12 md:gap-24 pb-32">
          {projects.map((proj, idx) => (
            <div 
              key={proj.id}
              onClick={() => navigate("/projects/" + proj.slug)} 
              className="sticky group cursor-pointer w-full flex flex-col md:flex-row h-auto md:h-[70vh] min-h-[500px] md:max-h-[800px] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-primary/20 border border-gray-200 dark:border-[#222]"
              style={{ top: `calc(10vh + ${idx * 2}rem)` }}
            >
              {/* Left Content */}
              <div className="w-full md:w-1/2 bg-white dark:bg-[#0a0a0a] p-10 md:p-16 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl md:text-2xl font-bold tracking-wide text-primary transition-colors">{proj.title}</h4>
                </div>
                
                <div className="my-12 md:my-0">
                  <p className="text-2xl md:text-[2rem] leading-tight text-gray-900 dark:text-gray-100 font-light mb-4">
                    {proj.summary.split('.')[0]}.
                  </p>
                  <p className="text-base text-gray-500 font-medium">
                    Built using {proj.tech.slice(0, 4).join(', ')}.
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <button className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-colors flex items-center">
                    Open project
                  </button>
                  {proj.link && (
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={(e) => e.stopPropagation()} 
                      className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:border-primary transition-colors"
                      title="View on GitHub"
                    >
                      <i className="fab fa-github text-lg"></i>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Image/Graphic */}
              <div className={`w-full md:w-1/2 h-64 md:h-full bg-gradient-to-br ${proj.imgPlaceholder} relative flex items-center justify-center overflow-hidden`}>
                {proj.image ? (
                  <div className="w-full h-full relative overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-700 ease-out" style={{ objectPosition: "left top" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-500"></div>
                  </div>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                    <h3 className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white opacity-20 transform -rotate-6 scale-150 group-hover:scale-125 transition-transform duration-700">{proj.title}</h3>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <FadeInSection delay={300} className="mt-16 flex justify-center">
          <a href="https://github.com/SouravCZ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 text-sm font-bold tracking-widest uppercase text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:border-primary dark:hover:border-primary transition-all duration-300 group shadow-sm hover:shadow-md">
            <i className="fab fa-github text-lg"></i>
            <span>View More on GitHub</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeInSection>
      </div>
    </section>
  );
}

const Skills = () => {
  const techStack = [
    {
      name: "React",
      icon: (
        <svg viewBox="-11.5 -10.23 23 20.46" className="w-10 h-10 fill-none stroke-current" strokeWidth="1">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </svg>
      )
    },
    {
      name: "Redux Toolkit",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-none stroke-current" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16.5 9.4 7.55 4.24a1.78 1.78 0 0 0-2.5 1.48v8.56a1.78 1.78 0 0 0 .89 1.54l8.96 5.17a1.78 1.78 0 0 0 2.5-1.48v-8.56a1.78 1.78 0 0 0-.9-1.55z"/>
          <circle cx="12" cy="12" r="3"/>
          <path d="M6 8.5C3.5 11 3.5 15 6 17.5s6.5 2.5 9 0"/>
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      )
    },
    {
      name: "GSAP",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-none stroke-current" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="m13 2-2 2.5h3L11 9h3l-5 8 1.5-5H7.5L9.5 7H7l2-5h4z"/>
          <path d="M4 18h16"/>
          <path d="M7 21h10"/>
        </svg>
      )
    },
    {
      name: "Framer",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
        </svg>
      )
    },
    {
      name: "Supabase",
      sparkle: true,
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
          <path d="M21.366 12.115a1.5 1.5 0 0 0-1.748-.48l-6.42 2.568 4.22-10.55a1.5 1.5 0 0 0-2.616-1.378L3.254 14.124a1.5 1.5 0 0 0 1.156 2.376h6.812l-4.464 5.952a1.5 1.5 0 0 0 2.274 1.854l11.75-10.575a1.5 1.5 0 0 0 .584-1.616z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      )
    },
    {
      name: "Vercel",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
          <path d="M12 2 24 22H0L12 2Z"/>
        </svg>
      )
    },
    {
      name: "Python",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
          <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.753h5.814v.827H3.926S0 5.78 0 11.904c0 6.123 3.42 5.908 3.42 5.908h2.04v-2.868s-.11-3.42 3.364-3.42h5.785v-.845H8.825V7.418s.07-3.432 5.894-3.432h4.48S24 3.986 24 0H11.914zm-2.85 1.637a.89.89 0 1 1 0 1.78.89.89 0 0 1 0-1.78zM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.753H11.98v-.827h8.094S24 18.22 24 12.096c0-6.123-3.42-5.908-3.42-5.908h-2.04v2.868s.11 3.42-3.364 3.42H9.391v.845h5.794v3.264s-.07 3.432-5.894 3.432H4.81S0 20.014 0 24h12.086zm2.85-1.637a.89.89 0 1 1 0-1.78.89.89 0 0 1 0 1.78z"/>
        </svg>
      )
    },
    {
      name: "PyTorch",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
          <path d="M12.986 0a9.07 9.07 0 0 0-4.464 1.17l2.187 2.186c.693-.414 1.48-.636 2.277-.636 2.502 0 4.53 2.03 4.53 4.53 0 2.503-2.028 4.533-4.53 4.533a4.53 4.53 0 0 1-4.532-4.533c0-.796.22-1.583.636-2.276L6.898 2.787A9.068 9.068 0 0 0 3.924 7.25C3.924 12.25 7.986 16.31 12.986 16.31c5.002 0 9.064-4.06 9.064-9.06 0-5.003-4.062-9.25-9.064-9.25zm4.035 1.584a1.27 1.27 0 1 0 0 2.54 1.27 1.27 0 0 0 0-2.54zM9.82 17.525l-2.09 2.09a9.04 9.04 0 0 0 5.256 1.67v-2.955a6.07 6.07 0 0 1-3.166-.805z"/>
        </svg>
      )
    },
    {
      name: "FastAPI",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.714 4.571h3.143l-4.286 7.429h3.714L8 19.429l2.857-7.429H8.286l3-7.429z"/>
        </svg>
      )
    },
    {
      name: "Scikit-Learn",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-none stroke-current" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3" fill="currentColor"/>
          <circle cx="18" cy="8" r="3" fill="currentColor"/>
          <circle cx="12" cy="18" r="3" fill="currentColor"/>
          <line x1="8.5" y1="7.5" x2="15.5" y2="7.5"/>
          <line x1="7.5" y1="8.5" x2="10.5" y2="15.5"/>
          <line x1="16.5" y1="10.5" x2="13.5" y2="15.5"/>
        </svg>
      )
    },
    {
      name: "Node.js",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
          <path d="M12 2.5 3.34 7.5v10L12 22.5l8.66-5V7.5L12 2.5zm0 2.31 6.66 3.84v7.7L12 20.19l-6.66-3.84v-7.7L12 4.81zM11 8v8h2V8h-2z"/>
        </svg>
      )
    },
    {
      name: "PostgreSQL",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-none stroke-current" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3v12c0 1.66-3.58 3-8 3s-8-1.34-8-3V6z"/>
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>
          <path d="M12 3v18"/>
        </svg>
      )
    },
    {
      name: "Docker",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
          <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.12a.186.186 0 0 0 .184-.185V9.006a.185.185 0 0 0-.185-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186H8.1a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.12a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185M23.76 9.89c-.37-.585-.92-1.01-1.638-1.267-.282-.102-.857-.184-1.396-.184-.165 0-.32.008-.475.023a4.57 4.57 0 0 0-2.825-1.572 4.47 4.47 0 0 0-3.328.773l-.22.164-.207-.18c-.464-.403-1.042-.625-1.67-.643-.058-.002-.116-.002-.174 0H.667a.666.666 0 0 0-.667.666v6.236c0 1.25.438 2.457 1.233 3.4 1.348 1.597 3.542 2.628 6.52 3.064 1.018.15 2.115.225 3.262.225 1.137 0 2.302-.075 3.46-.223 3.018-.387 5.253-1.42 6.64-3.072a4.84 4.84 0 0 0 1.23-3.4c0-.285-.022-.572-.066-.856a2.9 2.9 0 0 0 1.48-2.613z"/>
        </svg>
      )
    },
    {
      name: "Next.js",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
          <path d="M11.572 0a11.572 11.572 0 1 0 11.572 11.572A11.585 11.585 0 0 0 11.572 0zm5.666 16.488-5.32-6.852v6.852H10.1V7.512h1.818l5.32 6.852V7.512h1.818v8.976h-1.818z"/>
        </svg>
      )
    }
  ];

  // Double the list to ensure seamless infinite looping with 0 stutter
  const displayItems = [...techStack, ...techStack];

  return (
    <section id="skills" className="py-24 bg-offwhite dark:bg-darker border-t border-gray-200 dark:border-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12 text-center">
        <FadeInSection>
          <p className="text-xs font-mono uppercase tracking-[0.28em] text-gray-500 dark:text-zinc-400 mb-3">
            BUILT WITH
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
            A Modern, Production-Toolchain Stack
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A stack I chose for speed, reliability, and clean developer experience from state management to deployment.
          </p>
        </FadeInSection>
      </div>

      {/* Sliding Line Track */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        {/* Left & Right gradient masks for smooth fade edge */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 z-20 bg-gradient-to-r from-offwhite dark:from-darker to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 z-20 bg-gradient-to-l from-offwhite dark:from-darker to-transparent" />

        {/* Marquee Row */}
        <div className="animate-tech-marquee flex items-center gap-4 sm:gap-5 px-4">
          {displayItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[130px] h-[135px] sm:w-[145px] sm:h-[150px] md:w-[155px] md:h-[160px] shrink-0 rounded-2xl bg-white dark:bg-[#0c0c0e] border border-gray-200 dark:border-white/[0.08] hover:border-primary/50 dark:hover:border-zinc-500 hover:bg-gray-50 dark:hover:bg-[#151518] flex flex-col items-center justify-center p-4 relative group transition-all duration-300 shadow-sm hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              {/* Sparkle badge for special/highlighted items */}
              {item.sparkle && (
                <div className="absolute top-2.5 right-2.5 text-white pointer-events-none">
                  <svg className="w-3.5 h-3.5 fill-current animate-pulse drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" viewBox="0 0 24 24">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
                  </svg>
                </div>
              )}

              {/* Icon */}
              <div className="text-gray-700 dark:text-zinc-400 group-hover:text-primary dark:group-hover:text-white transition-colors duration-300 mb-3 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* Name */}
              <span className="text-xs sm:text-sm font-medium tracking-wide text-gray-700 dark:text-zinc-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 text-center select-none line-clamp-1">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FreelanceServices = () => {
  const services = [
    {
      title: "Full-Stack Web Dev",
      bgClass: "bg-[#0000FF]",
      textColor: "text-white",
      descColor: "text-white/95",
      dividerColor: "border-white/10",
      tagClass: "border-white/40 text-white bg-white/10",
      icon: <Laptop className="w-6 h-6 text-[#0000FF]" />,
      iconBg: "bg-white",
      description: "End-to-end web applications built with modern frameworks tailored exactly to your business needs.",
      thumbnails: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=200&h=200&fit=crop"
      ],
      tags: ["React/Vue", "Node.js", "+more"]
    },
    {
      title: "Machine Learning",
      bgClass: "bg-primary",
      textColor: "text-white",
      descColor: "text-white/95",
      dividerColor: "border-white/10",
      tagClass: "border-white/40 text-white bg-white/10",
      icon: <Brain className="w-6 h-6 text-primary" />,
      iconBg: "bg-white",
      description: "Custom AI models, predictive analytics, and intelligent decision support systems to scale your workflows.",
      thumbnails: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&h=200&fit=crop"
      ],
      tags: ["Predictive Models", "Data Pipelines", "+more"]
    },
    {
      title: "Data Analytics",
      bgClass: "bg-[#5FD65F]",
      textColor: "text-gray-950",
      descColor: "text-gray-900",
      dividerColor: "border-black/10",
      tagClass: "border-black/30 text-gray-950 bg-black/5",
      icon: <PieChart className="w-6 h-6 text-[#1e7e34]" />,
      iconBg: "bg-white",
      description: "Data pipelines, interactive dashboards, and deep data analysis to extract actionable insights from raw data.",
      thumbnails: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop"
      ],
      tags: ["Dashboards", "Reporting", "+more"]
    }
  ];

  return (
    <section id="freelance" className="py-24 bg-offwhite dark:bg-darker px-6 md:px-12 border-t border-gray-200 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-gray-500 dark:text-gray-400">Freelance Services</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                What I <span className="text-primary">Offer</span>
              </h3>
            </div>
            <a href="mailto:souravchakraborty33920@gmail.com" className="hidden md:inline-flex mt-6 md:mt-0 items-center space-x-3 px-8 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold tracking-widest uppercase hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300 shadow-lg cursor-pointer">
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </FadeInSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 items-stretch">
          {services.map((service, idx) => (
            <FadeInSection key={idx} delay={idx * 150} className={`flex flex-col h-full rounded-[32px] overflow-hidden transition-all duration-300 ${service.bgClass} shadow-xl hover:shadow-2xl border-0 hover:-translate-y-1`}>
              {/* Top Header */}
              <div className={`p-6 md:p-8 flex justify-between items-center border-b ${service.dividerColor}`}>
                <h4 className={`text-xl md:text-2xl font-bold tracking-wide ${service.textColor}`}>
                  {service.title}
                </h4>
                <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl ${service.iconBg} shadow-sm`}>
                  {service.icon}
                </div>
              </div>
              
              {/* Body Content */}
              <div className={`p-6 md:p-8 flex-grow flex flex-col ${service.bgClass}`}>
                <p className={`text-sm leading-relaxed mb-8 font-medium ${service.descColor}`}>
                  {service.description}
                </p>
                
                <div className="grid grid-cols-3 gap-3 mb-8 mt-auto">
                  {service.thumbnails.map((img, i) => (
                    <img key={i} src={img} alt="preview" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop"; }} className="w-full aspect-square object-cover rounded-xl shadow-sm filter hover:contrast-125 transition-all duration-300" />
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span key={i} className={`px-4 py-1.5 text-xs font-bold rounded-full border ${service.tagClass}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceAndProcess = () => {
  return (
    <section className="py-24 bg-offwhite dark:bg-darker px-6 md:px-12 border-t border-gray-200 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
        
        {/* Col 1: Education & Skills */}
        <div className="space-y-16">
          <FadeInSection>
            <h2 className="text-sm font-bold tracking-widest uppercase mb-8 text-gray-500 dark:text-gray-400">Education & Accolades</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-start border-b border-gray-300 dark:border-gray-800 pb-4 transition-colors duration-300">
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">B.Tech Data Science</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-500 mt-1">Adamas University</p>
                </div>
                <span className="text-primary text-sm font-display tracking-widest">2024-28</span>
              </div>
              <div className="flex justify-between items-start border-b border-gray-300 dark:border-gray-800 pb-4 transition-colors duration-300">
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">Smart India Hackathon</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-500 mt-1">Team Lead - Parivekshan AI</p>
                </div>
                <span className="text-primary text-sm font-display tracking-widest">2025</span>
              </div>
              <div className="flex justify-between items-start border-b border-gray-300 dark:border-gray-800 pb-4 transition-colors duration-300">
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">Gen AI Tools Certification</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-500 mt-1">NASSCOM FutureSkills Prime</p>
                </div>
                <span className="text-primary text-sm font-display tracking-widest">97%</span>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Col 2: Work Process */}
        <div className="lg:pl-8 border-l-0 lg:border-l border-gray-300 dark:border-gray-900 transition-colors duration-300">
          <FadeInSection>
            <h2 className="text-sm font-bold tracking-widest uppercase mb-10 text-gray-500 dark:text-gray-400">Work Process</h2>
            <div className="relative border-l border-gray-300 dark:border-gray-800 ml-4 space-y-10 pb-4 transition-colors duration-300">
              
              <div className="relative pl-8">
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-offwhite dark:bg-darker border border-gray-300 dark:border-gray-700 flex items-center justify-center text-primary text-xs transition-colors duration-300">
                  <i className="fas fa-search"></i>
                </div>
                <h3 className="font-bold text-primary mb-1">Discover</h3>
                <p className="text-xs text-gray-600 dark:text-gray-500">Data Collection & EDA</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-offwhite dark:bg-darker border border-gray-300 dark:border-gray-700 flex items-center justify-center text-primary text-xs transition-colors duration-300">
                  <i className="fas fa-sitemap"></i>
                </div>
                <h3 className="font-bold text-primary mb-1">Plan</h3>
                <p className="text-xs text-gray-600 dark:text-gray-500">Feature Engineering & Architecture</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-offwhite dark:bg-darker border border-gray-300 dark:border-gray-700 flex items-center justify-center text-primary text-xs transition-colors duration-300">
                  <i className="fas fa-brain"></i>
                </div>
                <h3 className="font-bold text-primary mb-1">Model</h3>
                <p className="text-xs text-gray-600 dark:text-gray-500">Training & Validation</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-offwhite dark:bg-darker border border-gray-300 dark:border-gray-700 flex items-center justify-center text-primary text-xs transition-colors duration-300">
                  <i className="fas fa-code"></i>
                </div>
                <h3 className="font-bold text-primary mb-1">Build</h3>
                <p className="text-xs text-gray-600 dark:text-gray-500">Full-Stack Integration</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-offwhite dark:bg-darker border border-gray-300 dark:border-gray-700 flex items-center justify-center text-primary text-xs transition-colors duration-300">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3 className="font-bold text-primary mb-1">Deliver</h3>
                <p className="text-xs text-gray-600 dark:text-gray-500">Deployment & Monitoring</p>
              </div>

            </div>
          </FadeInSection>
        </div>

        {/* Col 3: Quote & Connect */}
        <div className="lg:pl-8 border-l-0 lg:border-l border-gray-300 dark:border-gray-900 flex flex-col justify-between transition-colors duration-300">
          <FadeInSection delay={200}>
            <div className="mb-12">
              <Quote className="w-10 h-10 text-primary opacity-50 mb-6" />
              <p className="text-2xl font-light text-gray-700 dark:text-gray-300 leading-snug mb-6">
                Data is not just numbers, it's the <span className="text-primary font-bold">story</span> they tell and the <span className="text-primary font-bold">problems</span> they solve.
              </p>
              <h3 className="font-cursive text-3xl text-gray-900 dark:text-gray-100">Sourav</h3>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-xl font-display font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 mb-2">
                Let's Create<br/>Something Great<br/>Together.
              </h3>
            </div>
          </FadeInSection>
        </div>

      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-white dark:bg-dark px-6 md:px-12 border-t border-gray-200 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        
        {/* Left Side */}
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wide text-gray-900 dark:text-white mb-6 flex items-center">
            Let's Work<br/>Together
          </h2>
          <p className="text-gray-600 dark:text-gray-500 text-sm mb-8 max-w-sm">
            I'm currently open for new opportunities and collaborations. Let's create intelligent applications that bring results.
          </p>
          <a href="/Sourav_Chakraborty_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 text-xs font-bold tracking-widest uppercase text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors group border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary px-6 py-3 rounded-full">
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            <span>View Resume</span>
          </a>
        </div>

        {/* Right Side Links */}
        <div className="md:w-2/3 w-full flex flex-col sm:flex-row justify-end items-start gap-8 sm:gap-16">
          
          <div className="space-y-6 w-full sm:w-auto">
            <a href="mailto:souravchakraborty33920@gmail.com" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-800 flex items-center justify-center mr-4 group-hover:border-primary group-hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm">souravchakraborty33920@gmail.com</span>
            </a>
            
            <a href="https://github.com/SouravCZ" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-800 flex items-center justify-center mr-4 group-hover:border-primary group-hover:text-primary transition-colors">
                <i className="fab fa-github"></i>
              </div>
              <span className="text-sm">github.com/SouravCZ</span>
            </a>
          </div>

          <div className="space-y-6 w-full sm:w-auto">
            <a href="https://linkedin.com/in/souravchakraborty28" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-800 flex items-center justify-center mr-4 group-hover:border-primary group-hover:text-primary transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </div>
              <span className="text-sm">linkedin.com/in/souravchakraborty28</span>
            </a>
            
            <a href="https://www.instagram.com/_sourxv_09?stkn=MXJkZTBrNmZsb3g0cQ==" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-800 flex items-center justify-center mr-4 group-hover:border-primary group-hover:text-primary transition-colors">
                <i className="fab fa-instagram"></i>
              </div>
              <span className="text-sm">instagram.com/_sourxv_09</span>
            </a>
            
            <a href="/Sourav_Chakraborty_Resume.pdf" download className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-800 flex items-center justify-center mr-4 group-hover:border-primary group-hover:text-primary transition-colors">
                <Download className="w-5 h-5" />
              </div>
              <span className="text-sm">Download CV (.pdf)</span>
            </a>
          </div>

        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-200 dark:border-gray-900 text-center flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-600 transition-colors duration-300">
        <p>&copy; 2026 Sourav Chakraborty.</p>
        <p className="mt-2 md:mt-0 uppercase tracking-widest font-bold text-gray-600 dark:text-gray-500">Data Science & Development</p>
      </div>
    </footer>
  );
};


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ConnectModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-300" onClick={onClose}>
      <div className="bg-white dark:bg-dark border border-gray-100 dark:border-gray-800 rounded-2xl p-8 max-w-sm w-full relative shadow-xl" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Connect with me</h3>
        <div className="flex flex-col space-y-2">
          <a href="https://github.com/SouravCZ" target="_blank" rel="noreferrer" className="py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center justify-between cursor-pointer">
            <span>GitHub</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
          <div className="h-px w-full bg-gray-100 dark:bg-gray-800"></div>
          <a href="https://linkedin.com/in/souravcz" target="_blank" rel="noreferrer" className="py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center justify-between cursor-pointer">
            <span>LinkedIn</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
          <div className="h-px w-full bg-gray-100 dark:bg-gray-800"></div>
          <a href="mailto:souravchakraborty33920@gmail.com" className="py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center justify-between cursor-pointer">
            <span>Email</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

const Interests = () => {
  return (
    <section className="py-20 bg-white dark:bg-dark px-6 md:px-12 border-t border-gray-100 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-xs font-bold tracking-widest uppercase mb-2 text-gray-400">Beyond Code</h2>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Other Interests</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <Link to="/photography" className="flex items-center space-x-4 group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 p-3 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Photography</h4>
                  <p className="text-xs text-gray-500 mt-1">Visual storytelling & composition</p>
                </div>
              </Link>
              
              <Link to="/fitness" className="flex items-center space-x-4 group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 p-3 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Fitness</h4>
                  <p className="text-xs text-gray-500 mt-1">Health, discipline & training</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}


const PhotographyPage = () => {
  const photos = [
    { id: 1, src: '/photography/photo-1.jpg', alt: 'Bookstore contemplation' },
    { id: 2, src: '/photography/photo-2.jpg', alt: 'Minimalist landscape' },
    { id: 3, src: '/photography/photo-3.jpg', alt: 'Tower building through trees' },
    { id: 4, src: '/photography/photo-4.jpg', alt: 'Gathering in a circle' },
    { id: 5, src: '/photography/photo-5.jpg', alt: 'Ganesha idol creation' }
  ];

  return (
    <div className="min-h-screen bg-offwhite dark:bg-darker text-gray-900 dark:text-white transition-colors duration-300">
      <header className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 bg-offwhite/90 dark:bg-darker/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-gray-900 dark:text-white">
          <Link to="/" className="text-xl font-display font-bold tracking-wider uppercase text-gray-900 dark:text-white hover:text-primary transition-colors">
            SouravCZ
          </Link>
          <div className="flex items-center space-x-5">
            <Link to="/" className="hidden sm:inline text-[11px] font-bold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">
              ← Back
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-4">Photography</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Visual storytelling through the lens, where every frame tells a unique story.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {photos.map((photo) => (
              <div key={photo.id} className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 bg-gray-100 dark:bg-gray-900">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out filter dark:brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <p className="text-white/90 font-medium p-6 tracking-wide drop-shadow-lg text-sm md:text-base">
                    {photo.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-8 text-center border-t border-gray-200 dark:border-gray-900 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="uppercase tracking-widest font-bold text-gray-600 dark:text-gray-500 hover:text-primary transition-colors cursor-pointer">← Back to Home</Link>
        </div>
      </footer>
    </div>
  );
};

const FitnessPage = () => {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-darker text-gray-900 dark:text-white transition-colors duration-300">
      <header className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 bg-offwhite/90 dark:bg-darker/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-gray-900 dark:text-white">
          <Link to="/" className="text-xl font-display font-bold tracking-wider uppercase text-gray-900 dark:text-white hover:text-primary transition-colors">
            SouravCZ
          </Link>
          <div className="flex items-center space-x-5">
            <Link to="/" className="hidden sm:inline text-[11px] font-bold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">
              ← Back
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-4">Fitness</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Health, discipline, and pushing physical boundaries.</p>
          </div>

          <div className="h-px w-full bg-gray-200 dark:bg-gray-800 my-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-display font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-6">Philosophy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Fitness is more than just physical strength; it's about mental resilience, consistency, and discipline. The habits built in the gym directly translate to focus and endurance in problem-solving and deep work.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My approach combines strength training with functional mobility, ensuring long-term health and the energy needed to tackle complex technical challenges daily.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
              <h2 className="text-lg font-bold uppercase tracking-wide text-gray-900 dark:text-white mb-6">Current Routine</h2>
              <ul className="space-y-4">
                <li className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Push</span>
                  <span className="text-sm font-bold tracking-widest text-primary uppercase">Day 1</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Pull</span>
                  <span className="text-sm font-bold tracking-widest text-primary uppercase">Day 2</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Legs & Core</span>
                  <span className="text-sm font-bold tracking-widest text-primary uppercase">Day 3</span>
                </li>
                <li className="flex items-center justify-between pb-1">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Active Recovery</span>
                  <span className="text-sm font-bold tracking-widest text-primary uppercase">Day 4</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center border-t border-gray-200 dark:border-gray-900 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="uppercase tracking-widest font-bold text-gray-600 dark:text-gray-500 hover:text-primary transition-colors cursor-pointer">← Back to Home</Link>
        </div>
      </footer>
    </div>
  );
};

const ProjectPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-offwhite dark:bg-darker flex flex-col items-center justify-center px-6 text-center transition-colors duration-300">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-4">Project not found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Sorry, that project doesn't exist.</p>
        <Link to="/" className="inline-flex items-center space-x-3 text-primary text-sm font-bold tracking-widest uppercase hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">
          <ArrowRight className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  const otherProjects = projects.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-offwhite dark:bg-darker text-gray-900 dark:text-white transition-colors duration-300">
      <header className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 bg-offwhite/90 dark:bg-darker/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-gray-900 dark:text-white">
          <Link to="/" className="text-xl font-display font-bold tracking-wider uppercase text-gray-900 dark:text-white hover:text-primary transition-colors">
            SouravCZ
          </Link>
          <div className="flex items-center space-x-5">
            <Link to="/" className="hidden sm:inline text-[11px] font-bold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">
              ← Back
            </Link>
            
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-primary font-bold tracking-widest uppercase">{project.role}</p>
            <span className="text-primary font-display font-bold text-xl">{project.id}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white uppercase tracking-wide">{project.title}</h1>
          {project.subrole && (
            <p className="text-gray-600 dark:text-gray-400 mt-4 font-medium">{project.subrole}</p>
          )}

          {project.image && (
            <div className="my-10 rounded-2xl md:rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl bg-gray-100 dark:bg-[#0c0c0e]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
          )}

          <div className="h-px w-full bg-gray-200 dark:bg-gray-800 my-10"></div>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-14 whitespace-pre-line">{project.summary}</p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-14">
              <h2 className="text-sm font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-6">Key Highlights</h2>
              <ul className="space-y-5">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0 mr-4"></span>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{highlight}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.challenge && (
            <div className="mb-14">
              <h2 className="text-sm font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4">The Challenge</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.challenge}</p>
            </div>
          )}

          {project.tech && project.tech.length > 0 && (
            <div className="mb-14">
              <h2 className="text-sm font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white dark:bg-dark text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-md border border-gray-200 dark:border-gray-800">{t}</span>
                ))}
              </div>
            </div>
          )}

          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center space-x-3 text-primary hover:text-gray-900 dark:hover:text-white text-sm font-bold tracking-widest uppercase transition-colors cursor-pointer">
              <span>View Project Repository / Live</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          )}
        </div>
      </main>

      <footer className="py-8 text-center border-t border-gray-200 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="uppercase tracking-widest font-bold text-gray-600 dark:text-gray-500 hover:text-primary transition-colors cursor-pointer">← Back to Home</Link>
        </div>
      </footer>
    </div>
  );
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: "01",
      question: "What projects do you work on?",
      answer: "I specialize in bridging the gap between machine learning models and scalable web applications. My projects range from predictive analytics dashboards and AI decision support systems to robust full-stack web platforms."
    },
    {
      id: "02",
      question: "Do you work remotely or on-site?",
      answer: "I am fully equipped to work remotely with clients and teams worldwide. However, depending on the project requirements and location, I am open to hybrid or on-site arrangements."
    },
    {
      id: "03",
      question: "What's your tech stack and tooling?",
      answer: "My core stack includes React, Node.js, and Python. For AI/ML, I heavily use XGBoost, Scikit-Learn, and FastAPI. I rely on Tailwind CSS for styling, and PostgreSQL/PostGIS for database management."
    },
    {
      id: "04",
      question: "Can I see more of your work?",
      answer: "Absolutely! You can check out my GitHub profile linked in the footer, or explore the individual project case studies on this portfolio for deep dives into my architecture and code."
    },
    {
      id: "05",
      question: "How can I start a new project?",
      answer: "The best way to start is by sending me an email or reaching out via LinkedIn. We can schedule a quick discovery call to discuss your requirements, timeline, and how my technical expertise can help."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white dark:bg-[#0a0a0a] px-6 md:px-12 border-t border-gray-200 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <FadeInSection>
          <h2 className="text-sm font-bold tracking-widest uppercase mb-10 text-gray-500 dark:text-gray-400">Frequently asked questions</h2>
        </FadeInSection>

        <div className="flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <FadeInSection key={faq.id} delay={index * 50}>
                <div 
                  className="group flex flex-col py-4 md:py-5 border-b border-gray-200 dark:border-gray-800 cursor-pointer"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                >
                  <div className="flex items-center gap-6 md:gap-8">
                    <span className={`text-xl md:text-2xl font-light font-display transition-colors ${isOpen ? 'text-primary' : 'text-gray-400 dark:text-gray-600 group-hover:text-primary'}`}>
                      {faq.id}
                    </span>
                    <h3 className={`text-lg md:text-xl font-medium tracking-wide transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  
                  <div 
                    className="overflow-hidden transition-all duration-500 ease-in-out pl-12 md:pl-[3.5rem]"
                    style={{ 
                      maxHeight: isOpen ? '200px' : '0px',
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? '1rem' : '0'
                    }}
                  >
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            )
          })}
        </div>
      </div>
    </section>
  );
};



const Home = () => {
  const [isConnectOpen, setConnectOpen] = useState(false);
  
  useEffect(() => {
    if (isConnectOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isConnectOpen]);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar onConnect={() => setConnectOpen(true)} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <FreelanceServices />
      <ExperienceAndProcess />
        <FAQ />
      <Interests />
      <Footer />
      <ConnectModal isOpen={isConnectOpen} onClose={() => setConnectOpen(false)} />
    </div>
  );
};


const PageTitle = () => {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') document.title = 'Sourav Chakraborty | Home';
    else if (path === '/photography') document.title = 'Photography | Sourav Chakraborty';
    else if (path === '/fitness') document.title = 'Fitness | Sourav Chakraborty';
    else if (path.startsWith('/projects/')) {
      const slug = path.split('/').pop();
      const proj = getProjectBySlug(slug);
      document.title = proj ? `${proj.title} | Sourav Chakraborty` : 'Project Not Found';
    } else document.title = 'Sourav Chakraborty | Data Science & Full-Stack Developer';
  }, [location]);
  return null;
};

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <ScrollToTop />
        <PageTitle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/fitness" element={<FitnessPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}