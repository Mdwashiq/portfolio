import { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, Cpu, Code2, Layers, LayoutDashboard, 
  Link2, Eye, HelpCircle, CheckCircle2 
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';

const iconMap: Record<string, any> = {
  BrainCircuit: BrainCircuit,
  Cpu: Cpu,
  Code2: Code2,
  Layers: Layers,
  LayoutDashboard: LayoutDashboard,
  Link2: Link2,
  Eye: Eye,
  HelpCircle: HelpCircle
};

function ServiceCard({ service, index }: { service: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const IconComponent = iconMap[service.icon] || HelpCircle;

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="tech-card p-8 rounded-3xl glassmorphism border border-white/5 hover:border-white/15 transition-all duration-300 relative group flex flex-col justify-between shadow-xl"
    >
      <div className="z-10 text-left">
        {/* Glowing Icon Frame */}
        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-accent flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 mb-6">
          <IconComponent className="w-6 h-6 text-accent" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-accent transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/50 font-body leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Mini Bullet Features List */}
        <ul className="space-y-2 mb-2">
          {service.features.map((feat: string, fIdx: number) => (
            <li key={fIdx} className="flex items-center text-xs text-white/70 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent mr-2.5 shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration blur */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        
        {/* Section Header */}
        <div className="text-left max-w-xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
            OFFERED SERVICES
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
