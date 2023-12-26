import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://foipikvsrizrkvrzcnic.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvaXBpa3Zzcml6cmt2cnpjbmljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyODE1OTMsImV4cCI6MjAxNzg1NzU5M30.IYKmIEBaaK-6NQoDcbpB-wt7rOgPr3yV66qoYNjG-EM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
