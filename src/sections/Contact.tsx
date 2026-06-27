import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveContactMessage } from '../utils/supabaseClient';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    setStatus('submitting');
    try {
      await saveContactMessage(
        formData.name,
        formData.email,
        formData.subject || 'Portfolio Inquiry',
        formData.message
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Fire M-tricolor confetti explosion
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#0066b1', '#1c69d4', '#e22718', '#ffffff'],
      });
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4 font-heading uppercase">
            GET IN TOUCH
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-m-blue-light via-m-blue-dark to-m-red" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Panel: Contact info & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12 text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-heading leading-snug uppercase tracking-tight">
                LET'S BUILD <br />
                <span className="text-m-red">SOMETHING SIGNIFICANT</span> TOGETHER.
              </h3>
              <p className="text-xs md:text-sm text-body-text font-body font-light leading-relaxed">
                Whether you need an autonomous robotic integration, a custom AI agent workflow, a modern SaaS application, or database consulting—I'm here to help turn your ideas into functional products.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3.5 bg-surface-soft border border-hairline text-m-red rounded-none">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-muted-text uppercase tracking-widest">EMAIL ADDRESS</div>
                  <a href="mailto:wahiqmohamed@gmail.com" className="text-sm font-bold text-white hover:text-m-red transition-colors font-heading cursor-none uppercase tracking-tight">
                    wahiqmohamed@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3.5 bg-surface-soft border border-hairline text-m-blue-light rounded-none">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-muted-text uppercase tracking-widest">LOCATION</div>
                  <div className="text-sm font-bold text-white font-heading uppercase tracking-tight">
                    Tamil Nadu, India
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="space-y-4">
              <div className="text-[10px] font-mono font-bold text-muted-text uppercase tracking-widest">CONNECT WITH ME</div>
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/-washiq7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-surface-soft border border-hairline hover:bg-white hover:text-black hover:border-white text-white/70 hover:text-white transition-all cursor-none rounded-none"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-3.5 bg-surface-soft border border-hairline hover:bg-white hover:text-black hover:border-white text-white/70 hover:text-white transition-all cursor-none rounded-none"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel: Spec Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative bg-surface-soft border border-hairline rounded-none p-8 md:p-10 shadow-2xl overflow-hidden">
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                      className="p-4 bg-black border border-m-red text-m-red rounded-none"
                    >
                      <CheckCircle2 className="w-12 h-12" />
                    </motion.div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white font-heading uppercase tracking-tight">
                        MESSAGE SUBMITTED.
                      </h3>
                      <p className="text-xs text-body-text max-w-sm mx-auto font-body font-light leading-relaxed">
                        Inquiry persisted successfully. System queue will process this telemetry profile. Expect direct feedback within 24 hours.
                      </p>
                    </div>

                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-3 bg-black border border-white hover:bg-white hover:text-black text-xs font-bold tracking-widest uppercase transition-all cursor-none rounded-none"
                    >
                      SEND ANOTHER TRANSMISSION
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {status === 'error' && (
                      <div className="p-4 bg-black border border-m-red text-m-red text-xs flex items-center space-x-3.5 rounded-none font-mono">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Name Input */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="text-[10px] font-mono font-bold tracking-widest text-white/40">
                        FULL NAME <span className="text-m-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full h-12 px-4 bg-black border border-hairline focus:border-white text-sm text-white placeholder-white/20 outline-none transition-all cursor-none font-body font-light rounded-none"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-[10px] font-mono font-bold tracking-widest text-white/40">
                        EMAIL ADDRESS <span className="text-m-red">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="johndoe@example.com"
                        className="w-full h-12 px-4 bg-black border border-hairline focus:border-white text-sm text-white placeholder-white/20 outline-none transition-all cursor-none font-body font-light rounded-none"
                      />
                    </div>

                    {/* Subject Input */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="subject" className="text-[10px] font-mono font-bold tracking-widest text-white/40">
                        SUBJECT
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="System Collaboration"
                        className="w-full h-12 px-4 bg-black border border-hairline focus:border-white text-sm text-white placeholder-white/20 outline-none transition-all cursor-none font-body font-light rounded-none"
                      />
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="message" className="text-[10px] font-mono font-bold tracking-widest text-white/40">
                        TRANSMISSION FEEDBACK <span className="text-m-red">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Specify telemetry parameters, goals, or scheduling details..."
                        className="w-full px-4 py-3 bg-black border border-hairline focus:border-white text-sm text-white placeholder-white/20 outline-none transition-all resize-none cursor-none font-body font-light rounded-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="bmw-btn-primary w-full py-4 tracking-[2px] cursor-none disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 rounded-none border border-t-transparent border-white animate-spin mr-2" />
                          <span>TRANSMITTING...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          <span>SUBMIT TRANSMISSION</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
