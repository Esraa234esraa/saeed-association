import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables to prevent crashes with invalid URLs
const isValidUrl = (urlString) => {
  try { 
    return Boolean(new URL(urlString)); 
  } catch(e){ 
    return false; 
  }
};

const isConfigured = 
  supabaseUrl && 
  supabaseUrl !== 'YOUR_SUPABASE_URL' && 
  isValidUrl(supabaseUrl) &&
  supabaseAnonKey && 
  supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY';

if (!isConfigured) {
  console.warn('Supabase is not configured. Please check your .env file for VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
}

// Use fallback values if not configured to prevent "Invalid URL" errors during initialization
// This allows the app to load even if Supabase isn't connected yet
const urlToUse = isConfigured ? supabaseUrl : 'https://placeholder.supabase.co';
const keyToUse = isConfigured ? supabaseAnonKey : 'placeholder-key';

export const supabase = createClient(urlToUse, keyToUse, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});