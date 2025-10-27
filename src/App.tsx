import React, { useState } from 'react';
import { Tile } from './components/Tile';
import { InfoModal } from './components/InfoModal';
import {
  Mail,
  FileText,
  Briefcase,
  UserCheck,
  Gamepad2,
  Eye,
  X,
  Github,
  ExternalLink,
  Linkedin
} from 'lucide-react';

import codeAnalyzerImg from '../AI code analyzer.png';
import learningPathImg from '../AI Learning path generator.png';
import agentceptionImg from '../Agentception.png';
import resumePDF from '../Arun_Chukkala_AI_Engineer_Updated.pdf';
const medicalAssistantImg = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1080&q=80';

const NavLink = ({ href, onClick, children }: { href?: string; onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void; children: React.ReactNode }) => {
  if (href) {
    return (
      <a
        href={href}
        onClick={(event) => {
          if (onClick) {
            event.preventDefault();
            onClick(event);
          }
        }}
        className="text-sm text-gray-400 hover:text-white transition-colors"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="text-sm text-gray-400 hover:text-white transition-colors"
    >
      {children}
    </button>
  );
};

type Project = {
  id: string;
  name: string;
  image?: string;
  description: string;
  demoUrl: string;
  githubUrl?: string;
  technologies?: string[];
};

const projects: Project[] = [
  {
    id: 'llm-code-analyzer',
    name: 'LLM Code Analyzer',
    image: codeAnalyzerImg,
    description: 'Multi-agent code review application using GPT-4o, Claude, and DeepSeek for automated analysis. Identifies security vulnerabilities, performance issues, and maintainability concerns. Implemented LangSmith observability for debugging and monitoring agent decisions.',
    demoUrl: 'https://ai-code-analyzer-tcl8.onrender.com/',
    githubUrl: 'https://github.com/arun3676/llm-code-analyzer',
    technologies: ['GPT-4o', 'Claude 4', 'DeepSeek', 'LangChain', 'LangSmith', 'Streamlit', 'Python']
  },
  {
    id: 'ai-learning-path',
    name: 'AI Learning Path Generator',
    image: learningPathImg,
    description: 'Personalized curriculum generator using RAG pipeline (ChromaDB + LlamaIndex). Reduced API token usage by 45% through semantic caching while maintaining response quality. Adapts recommendations based on user conversation history and learning patterns.',
    demoUrl: 'https://ai-learning-path-generator.onrender.com/',
    githubUrl: 'https://github.com/arun3676/ai-learning-path-generator',
    technologies: ['ChromaDB', 'LlamaIndex', 'RAG', 'Semantic Caching', 'Python', 'Streamlit']
  },
  {
    id: 'medical-imaging-assistant',
    name: 'Medical Imaging Assistant',
    image: medicalAssistantImg,
    description: 'Research prototype for medical imaging analysis using Gemini 2.5 Pro with RAG-enhanced knowledge base. Evaluated on public medical imaging datasets; not intended for clinical use. Retrieves relevant medical literature from PubMed to support image interpretation.',
    demoUrl: 'https://multimodal-medical-diagnosis.onrender.com/',
    githubUrl: 'https://github.com/arun3676/multimodal-medical-diagnosis',
    technologies: ['Gemini 2.5 Pro', 'Flask', 'RAG', 'PubMed API', 'Computer Vision', 'Python']
  },
  {
    id: 'job-search-assistant',
    name: 'Job Search Assistant',
    image: agentceptionImg,
    description: 'Multi-agent application (FastAPI + Next.js) for automating job search workflows. Includes resume analysis, job matching, application tracking, and interview preparation features. Implements task persistence and human-in-the-loop approval mechanisms.',
    demoUrl: 'https://agentception.vercel.app/',
    githubUrl: 'https://github.com/arun3676/agentception',
    technologies: ['FastAPI', 'Next.js', 'Multi-Agent Systems', 'LangChain', 'React', 'Python']
  }
];

const funProjects: Project[] = [
  { id: 'purple-calmm', name: 'PurpleCalmm', description: 'A cozy cat-themed mobile/web wellness app for relaxation.', demoUrl: 'https://purple-calmm.vercel.app/' },
  { id: 'relationdraama', name: 'Relationdraama', description: 'A web app for analyzing relationship compatibility with interactive quizzes.', demoUrl: 'https://relationdraama.streamlit.app/' },
  { id: 'jiminaah', name: 'Jiminaah', description: 'A weather-inspired mood and journaling app built with Next.js.', demoUrl: 'https://jiminaah.vercel.app/' },
  { id: 'vibe-check', name: 'Vibe Check', description: 'A multi-modal AI music recommendation tool.', demoUrl: 'https://vibeee-check.streamlit.app/' },
  { id: 'rizz-check', name: 'Rizz Check', description: 'A lightweight React app to check your rizz.', demoUrl: 'https://rizz-check.vercel.app/' },
];

const accentColors = ['peach', 'aqua', 'neon-green', 'sunset-orange'];

const skills = {
  'AI & Machine Learning': ['LangChain', 'LlamaIndex', 'OpenAI APIs', 'Anthropic Claude', 'Google Gemini', 'RAG Systems', 'Vector Databases (Pinecone, ChromaDB, FAISS, Weaviate)', 'Model Fine-tuning', 'LoRA', 'QLoRA', 'Prompt Engineering'],
  'Development & Deployment': ['Python', 'FastAPI', 'Flask', 'Streamlit', 'Docker', 'Git', 'GitHub', 'vLLM', 'AWS (S3, Lambda, SageMaker, Bedrock)', 'Azure ML', 'Google Cloud Vertex AI'],
  'Machine Learning & Data': ['XGBoost', 'LightGBM', 'CatBoost', 'Isolation Forest', 'Autoencoders', 'LSTM', 'BERT', 'Pandas', 'NumPy', 'SQL', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
  'MLOps & Monitoring': ['MLflow', 'LangSmith', 'Weights & Biases', 'CI/CD Pipelines', 'GitHub Actions', 'Model Evaluation', 'A/B Testing'],
  'Tools & IDEs': ['Jupyter', 'VS Code', 'Cursor AI', 'Windsurf', 'Linux/Unix', 'Bash', 'Apache Kafka', 'Apache Spark'],
};

const infoContent = {
  'About Me': <p>AI Engineer with 3+ years of experience building intelligent applications using large language models (LLMs) and retrieval systems. Skilled in taking AI features from prototype to production, with focus on practical solutions that improve business outcomes. Experienced with modern AI tools including GPT-4o/GPT-5, Claude Sonnet 4.5, and Gemini 2.5 Pro. Strong background in deploying scalable systems with measurable impact on performance and user experience.</p>,
  'Experience': <div>
    <h3 className="font-bold text-lg mb-2">AI/ML Engineer (Contract)</h3>
    <p className="text-sm text-gray-600 mb-2">Jefferies Group - Remote, USA | Mar 2024 - Present</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Built document retrieval system using RAG architecture (LangChain + Pinecone) that reduced manual review time by approximately 30% for business analysts.</li>
      <li>Optimized model inference pipeline using vLLM, improving response latency from ~850ms to ~320ms under typical load conditions.</li>
      <li>Implemented customer lifetime value (CLV) prediction models on AWS SageMaker using 15M+ customer records, contributing to improved customer segmentation.</li>
    </ul>
  </div>,
  'Why Hire Me': <p>I build things that actually work. I’m not about buzzwords — I focus on making ideas real. From quick AI prototypes to working apps, I turn concepts into something people can use. I love connecting research with real-world impact and believe progress comes from shipping, learning, and improving fast.</p>,
};

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [infoModalContent, setInfoModalContent] = useState<{ title: string; content: React.ReactNode } | null>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const tileData = [
    {
      size: '2x2' as const,
      color: 'bg-professional-violet',
      className: 'flex flex-col justify-end p-4',
      children: (
        <div className="text-white">
          <h2 className="font-bold text-lg">Hello, I'm Arun.</h2>
          <p className="text-sm">AI/ML Engineer</p>
        </div>
      ),
      onClick: () => setInfoModalContent({ title: 'About Me', content: infoContent['About Me'] }),
    },
    ...projects.map(p => ({
      size: '1x1' as const,
      image: p.image,
      label: p.name,
      onClick: () => setSelectedProject(p),
    })),
    {
      icon: <UserCheck className="w-6 h-6" />,
      label: 'Why Hire Me',
      size: '1x1' as const,
      color: 'bg-professional-teal',
      onClick: () => setInfoModalContent({ title: 'Why Hire Me', content: infoContent['Why Hire Me'] }),
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      label: 'Experience',
      size: '1x1' as const,
      color: 'bg-professional-charcoal',
      onClick: () => setInfoModalContent({ title: 'Experience', content: infoContent['Experience'] }),
    },
    {
      icon: <FileText className="w-6 h-6" />,
      label: 'Resume',
      size: '1x1' as const,
      color: 'bg-professional-navy',
      link: resumePDF,
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Contact',
      size: '1x1' as const,
      color: 'bg-accent-peach',
      link: 'mailto:arunkiran721@gmail.com',
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      label: 'Just for Fun',
      size: '1x1' as const,
      color: 'bg-accent-sunset-orange',
      onClick: () => {
        scrollToSection('ai-experiments');
      },
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      size: '1x1' as const,
      color: 'bg-gray-800',
      link: 'https://github.com/arun3676',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      size: '1x1' as const,
      color: 'bg-blue-700',
      link: 'https://www.linkedin.com/in/arun-kumar-chukkala-391768204/',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>,
      label: 'X',
      size: '1x1' as const,
      color: 'bg-black',
      link: 'https://x.com/arunn0718',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 0-7.5 16.5s.5.1 1.2-.4c.7-.5 1.3-1.1 1.3-1.1a10 10 0 1 1 9.8 0s.6.6 1.3 1.1c.7.5 1.2.4 1.2.4A10 10 0 0 0 12 2Z"/><path d="M8.5 10.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1Z"/></svg>,
      label: 'Hugging Face',
      size: '1x1' as const,
      color: 'bg-yellow-500',
      link: 'https://huggingface.co/arunn7',
    },
  ];

  return (
    <div className="min-h-screen bg-indigo-900 text-gray-300">
      <header className="p-6 flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="font-bold text-lg text-white">Arun Kumar Chukkala</h1>
        <nav className="flex items-center gap-4">
          <NavLink href="#about" onClick={() => scrollToSection('about')}>About</NavLink>
          <NavLink onClick={() => setInfoModalContent({ title: 'Experience', content: infoContent['Experience'] })}>Experience</NavLink>
          <NavLink href="#projects" onClick={() => scrollToSection('projects')}>Projects</NavLink>
          <NavLink href="#ai-experiments" onClick={() => scrollToSection('ai-experiments')}>AI Experiments</NavLink>
          <NavLink href="mailto:arunkiran721@gmail.com">Contact</NavLink>
          <NavLink onClick={() => setInfoModalContent({ title: 'Why Hire Me', content: infoContent['Why Hire Me'] })}>Why Hire Me</NavLink>
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
            <Eye className="w-5 h-5 text-gray-700" />
          </button>
        </nav>
      </header>

      <main className="p-6 max-w-4xl mx-auto">
        <section id="about" className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-300 leading-snug max-w-2xl mx-auto">
            AI Engineer with 3+ years of experience building intelligent applications using large language models (LLMs) and retrieval systems. Skilled in taking AI features from prototype to production, with focus on practical solutions that improve business outcomes.
          </h2>
        </section>

        <section id="projects" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[160px]">
          {tileData.map((tile, index) => (
            <Tile key={index} {...tile} />
          ))}
        </section>

        <div id="skills" className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="font-bold text-lg mb-2 text-white">{category}</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {skillList.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <section id="ai-experiments" className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Just for Fun</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {funProjects.map((p, index) => (
              <Tile
                key={p.id}
                label={p.name}
                color={`bg-accent-${accentColors[index % accentColors.length]}`}
                onClick={() => setSelectedProject(p)}
              />
            ))}
          </div>
        </section>

      </main>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
                <button onClick={() => setSelectedProject(null)} className="text-gray-500 hover:text-gray-800">
                  <X size={24} />
                </button>
              </div>
              {selectedProject.image && <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-64 object-cover rounded-md mb-4"/>}
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>
              {selectedProject.technologies && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map(tech => (
                    <span key={tech} className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tech}</span>
                  ))}
                </div>
              )}
              <div className="flex gap-4">
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                    <Github size={18} />
                    GitHub
                  </a>
                )}
                <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {infoModalContent && (
        <InfoModal 
          title={infoModalContent.title} 
          content={infoModalContent.content} 
          onClose={() => setInfoModalContent(null)} 
        />
      )}
    </div>
  );
}

export default App;
