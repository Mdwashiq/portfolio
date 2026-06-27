import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a singleton client or return null if env variables are missing
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

// Helper to save messages
export async function saveContactMessage(name: string, email: string, subject: string, message: string) {
  if (supabase) {
    const { data, error } = await supabase
      .from('contacts')
      .insert([{ name, email, subject, message, created_at: new Date() }]);
    
    if (error) throw error;
    return { success: true, data };
  } else {
    // Graceful mock fallback
    console.warn("Supabase credentials missing. Mocking message submission (saved to localStorage).");
    
    const localMsgs = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
    const newMsg = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      subject,
      message,
      created_at: new Date().toISOString()
    };
    
    localMsgs.push(newMsg);
    localStorage.setItem('portfolio_messages', JSON.stringify(localMsgs));
    
    // Simulate database delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    return { success: true, data: newMsg };
  }
}
