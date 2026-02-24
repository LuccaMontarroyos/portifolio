import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Terminal,
  Code,
  Database,
  Shield,
  Server,
  Mail,
  Github,
  Linkedin,
  ArrowDown,
  CheckCircle,
  ExternalLink,
  Download
} from 'lucide-react';

const projectsConfig = [
  {
    id: "flowly",
    tags: [
      "Next.js", "Node.js", "Express", "TypeScript", "Prisma ORM", "PostgreSQL", "Docker", "JWT"
    ],
    githubUrl: "https://github.com/LuccaMontarroyos/flowly-saas",
    demoUrl: "https://flowly-saas.vercel.app/auth/register",
    imageUrl: "src/assets/flowly.png",
    isFeatured: true,
  },
  {
    id: "convit3",
    tags: ["Next.js", "NestJS", "Prisma ORM", "PostgreSQL", "TypeScript"],
    imageUrl: "src/assets/convite.png",
    githubUrl: "https://github.com/LuccaMontarroyos/projeto-convit3"
  },
  {
    id: "doctorSchedule",
    tags: ["Next.js", "Drizzle ORM", "PostgreSQL", "TypeScript"],
    imageUrl: "src/assets/doctor-schedule.png",
    githubUrl: "https://github.com/LuccaMontarroyos/doctor-schedule"
  },
  {
    id: "marketplace",
    tags: [
      "Next.js", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "Stripe", "JWT"
    ],
    githubUrl: "https://github.com/LuccaMontarroyos/marketplace",
    imageUrl: "src/assets/marketplace.png",
    isFeatured: true
  },
  {
    id: "postApp",
    tags: ["AngularJS", "Node.js", "Sequelize ORM", "PostgreSQL"],
    imageUrl: "src/assets/post-app.png",
    githubUrl: "https://github.com/LuccaMontarroyos/medium-post-app"
  },
];

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("luccabarros2003@gmail.com");
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  };

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth', 'scroll-pt-20');

    return () => {
      document.documentElement.classList.remove('scroll-smooth', 'scroll-pt-20');
    };
  }, []);

  const toggleLanguage = () => {
    const isEnglish = i18n.language?.startsWith('en');
    i18n.changeLanguage(isEnglish ? 'pt' : 'en');
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-600">
      <header className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Terminal className="text-blue-500 w-8 h-8" />
            <div className="flex flex-col">
              <h1 className="text-white text-xl font-bold leading-none uppercase tracking-tight">
                LUCCA<span className="text-blue-500">BARROS</span>
              </h1>
              <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">Full-Stack Developer</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#projects" className="hover:text-blue-500 transition-colors">{t('nav.projects')}</a>
            <a href="#architecture" className="hover:text-blue-500 transition-colors">{t('nav.philosophy')}</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">{t('nav.about')}</a>
            <button onClick={toggleLanguage} className="flex items-center gap-2 px-3 py-1 border border-slate-700 rounded-md text-[10px] font-bold hover:bg-slate-800 transition-all text-blue-400">
              <span className={i18n.language?.startsWith('en') ? 'text-blue-500' : 'text-slate-500'}>EN</span>
              <span className="text-slate-700">|</span>
              <span className={i18n.language?.startsWith('pt') ? 'text-blue-500' : 'text-slate-500'}>PT</span>
            </button>
            <a href="#contact" className="px-5 py-2 bg-blue-600 text-white rounded-lg transition-transform hover:scale-105">{t('nav.contact')}</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50"></div>
          <div className="relative z-10 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold mb-6">
              {t('hero.badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              {t('hero.title')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">{t('hero.titleAccent')}</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">{t('hero.subtitle')}</p>
            <a href="#projects" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 rounded-lg font-bold hover:scale-105 transition-transform">
                {t('nav.projects')} <ArrowDown size={18} />
            </a>
          </div>
        </section>

        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-16">{t('nav.projects')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsConfig.map((project) => (
              <div 
                key={project.id} 
                className={`group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all flex flex-col ${project.isFeatured ? 'md:col-span-2 lg:flex-row' : ''}`}
              >              
                <div className={`relative overflow-hidden ${project.isFeatured ? 'md:w-1/2 h-64 md:h-full' : 'w-full h-48'}`}>
                   <div className="absolute inset-0 bg-blue-600/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <img 
                    src={project.imageUrl} 
                    alt={t(`projects.${project.id}.title`)} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                </div>
                <div className={`p-8 flex flex-col justify-center ${project.isFeatured ? 'md:w-1/2' : 'w-full'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      {project.isFeatured && (
                        <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-2 block">Destaque</span>
                      )}
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-500 transition-colors">
                        {t(`projects.${project.id}.title`)}
                      </h3>
                    </div>
                    
                    <div className="flex gap-4 text-slate-500">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Repositório no GitHub">
                          <Github size={20} />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Visualizar Aplicação">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>

                  </div>

                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {t(`projects.${project.id}.description`)}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-slate-800 text-slate-400 text-[10px] font-bold rounded-md border border-slate-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="architecture" className="py-24 bg-slate-950/50 border-y border-slate-800 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/3">
                    <span className="text-blue-500 font-bold uppercase text-xs tracking-widest">Mindset</span>
                    <h2 className="text-4xl font-bold text-white mt-4 mb-6">{t('architecture.title')} <br /><span className="text-slate-500">{t('architecture.subtitle')}</span></h2>
                    <p className="text-slate-400 mb-8">{t('architecture.description')}</p>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ArchitectureCard icon={<Code />} title="Clean Code" desc={t('architecture.principles.cleanCode')} />
                    <ArchitectureCard icon={<Server />} title={i18n.language === 'en' ? "Scalability" : "Escalabilidade"} desc={t('architecture.principles.scalability')} />
                    <ArchitectureCard icon={<Database />} title={i18n.language === 'en' ? "Integrity" : "Integridade"} desc={t('architecture.principles.integrity')} />
                    <ArchitectureCard icon={<Shield />} title={i18n.language === 'en' ? "Security" : "Segurança"} desc={t('architecture.principles.security')} />
                </div>
            </div>
        </section>

        <section id="about" className="py-24 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">{t('about.title')}</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">{t('about.description')}</p>
          <a 
            href={i18n.language?.startsWith('en') ? "/resume-en.pdf" : "/resume-pt.pdf"} 
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-700 hover:border-blue-500/50 rounded-lg font-medium transition-all"
          >
            <Download size={18} />
            {t('about.resumeBtn')}
          </a>
        </section>
      </main>
      
      <footer id="contact" className="py-16 text-center border-t border-slate-800 px-6">
        <h2 className="text-3xl font-bold text-white mb-10">{i18n.language?.startsWith('en') ? 'Ready to build something solid?' : 'Vamos construir algo sólido?'}</h2>
        <div className="flex justify-center gap-8 mb-12">
          <SocialLink icon={<Linkedin />} label="LinkedIn" href="https://linkedin.com/in/lucca-barros" />
          <SocialLink icon={<Github />} label="GitHub" href="https://github.com/LuccaMontarroyos" />
          <button 
            onClick={handleCopyEmail} 
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-all group"
            title={i18n.language?.startsWith('en') ? "Copy to clipboard" : "Copiar para a área de transferência"}
          >
            <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all group-hover:scale-110 ${
              emailCopied 
                ? 'bg-emerald-600/20 border-emerald-500/50 text-emerald-400' 
                : 'bg-slate-900 border-slate-800 group-hover:bg-blue-600 group-hover:border-blue-500'
            }`}>
              {emailCopied ? <CheckCircle size={20} /> : <Mail size={20} />}
            </div>
            <span className={`text-xs ${emailCopied ? 'text-emerald-400' : ''}`}>
              {emailCopied 
                ? (i18n.language?.startsWith('en') ? 'Copied!' : 'Copiado!') 
                : 'E-mail'}
            </span>
          </button>
        </div>
        <p className="text-slate-600 text-sm">© 2026 Lucca Barros.</p>
      </footer>
    </div>
  );
};

const ArchitectureCard = ({ icon, title, desc }) => (
  <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all group">
    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 text-blue-500 group-hover:text-white transition-all">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const SocialLink = ({ icon, label, href }) => (
  <a href={href} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-all group">
    <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <span className="text-xs">{label}</span>
  </a>
);

export default Portfolio;