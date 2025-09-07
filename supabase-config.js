// Supabase configuration
const SUPABASE_URL = 'https://bouksprqbazblaumxdzr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvdWtzcHJxYmF6YmxhdW14ZHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NTkxNTQsImV4cCI6MjA2NzEzNTE1NH0.rnBfRU14jDdUb0I5DuIMVGse3YHNoNzV4CVUcfJLpMU';

// Initialize Supabase client
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);