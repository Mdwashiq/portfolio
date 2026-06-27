import { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, Cpu, Code2, Layers, LayoutDashboard, 
  Link2, Eye, HelpCircle 
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="p-8 bg-surface-card border border-hairline rounded-none hover:border-hairline-strong transition-all duration-300 relative group flex flex-col justify-between"
    >
      {/* Subtle blue mouse glow hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(150px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(28, 105, 212, 0.2), transparent 50%)`
        }}
      />

      <div className="z-10 text-left">
        {/* Square Icon frame */}
        <div className="w-12 h-12 bg-white border border-hairline text-primary flex items-center justify-center group-hover:scale-105 transition-all duration-300 mb-6 rounded-none">
          <IconComponent className="w-5 h-5 text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-ink font-heading mb-3 group-hover:text-primary transition-colors uppercase tracking-tight">
          {service.title}
        </h3>

        {/* Description: Light 300 */}
        <p className="text-xs md:text-sm text-body-text font-body font-light leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features lists */}
        <ul className="space-y-2 mb-2">
          {service.features.map((feat: string, fIdx: number) => (
            <li key={fIdx} className="flex items-center text-xs text-body-text font-mono uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-primary mr-2.5 shrink-0 rounded-none" />
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
    <section id="services" className="py-20 relative overflow-hidden bg-canvas border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        
        {/* Section Header */}
        <div className="text-left max-w-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-4 font-heading uppercase">
            OFFERED SERVICES
          </h2>
          <div className="w-16 h-1 bg-primary" />
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
