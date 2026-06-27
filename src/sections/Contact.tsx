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
      
      // Fire premium confetti explosion
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#2563EB', '#7C3AED', '#06B6D4'],
      });
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-bg-dark/40">
      {/* Background decoration blur */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
            GET IN TOUCH
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Panel: Contact info & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12 text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-heading leading-snug">
                Let's build something <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  extraordinary
                </span> together.
              </h3>
              <p className="text-sm md:text-base text-white/50 font-body leading-relaxed">
                Whether you need an autonomous robotic integration, a custom AI agent workflow, a modern SaaS application, or database consulting—I'm here to help turn your ideas into functional products.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/40">EMAIL ME</div>
                  <a href="mailto:wahiqmohamed@gmail.com" className="text-sm font-bold text-white hover:text-accent transition-colors font-heading cursor-none">
                    wahiqmohamed@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/40">LOCATION</div>
                  <div className="text-sm font-bold text-white font-heading">
                    Tamil Nadu, India
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="space-y-4">
              <div className="text-xs font-mono text-white/30">CONNECT WITH ME</div>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-white/70 hover:text-white transition-all cursor-none"
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
                  className="p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-white/70 hover:text-white transition-all cursor-none"
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

          {/* Right Panel: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl glassmorphism border border-white/5 p-8 md:p-10 shadow-2xl overflow-hidden">
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  /* Success Overlay state */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                      className="p-4 rounded-full bg-accent/15 text-accent border border-accent/20"
                    >
                      <CheckCircle2 className="w-16 h-16" />
                    </motion.div>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white font-heading">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-sm text-white/50 max-w-sm mx-auto font-body">
                        Thank you for reaching out. I have received your request and will get back to you within 24 hours.
                      </p>
                    </div>

                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-semibold text-white transition-all cursor-none"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  /* Form View state */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Error Alerts */}
                    {status === 'error' && (
                      <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center space-x-3.5">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Name Input */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="text-xs font-mono text-white/40">
                        FULL NAME <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/5 focus:border-accent focus:bg-white/10 text-sm text-white placeholder-white/20 outline-none transition-all cursor-none font-body"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-xs font-mono text-white/40">
                        EMAIL ADDRESS <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="johndoe@example.com"
                        className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/5 focus:border-accent focus:bg-white/10 text-sm text-white placeholder-white/20 outline-none transition-all cursor-none font-body"
                      />
                    </div>

                    {/* Subject Input */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="subject" className="text-xs font-mono text-white/40">
                        SUBJECT
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Collaboration"
                        className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/5 focus:border-accent focus:bg-white/10 text-sm text-white placeholder-white/20 outline-none transition-all cursor-none font-body"
                      />
                    </div>

                    {/* Message Area */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="message" className="text-xs font-mono text-white/40">
                        YOUR MESSAGE <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, goals, or requirements..."
                        className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/5 focus:border-accent focus:bg-white/10 text-sm text-white placeholder-white/20 outline-none transition-all resize-none cursor-none font-body"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:opacity-50 text-sm font-semibold text-white inline-flex items-center justify-center space-x-2 transition-all duration-300 cursor-none"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-white animate-spin" />
                          <span>SENDING INQUIRY...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SEND MESSAGE</span>
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
