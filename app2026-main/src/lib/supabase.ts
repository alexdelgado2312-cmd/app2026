import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eieabrbmctrzosmknnft.supabase.co";
const supabaseAnonKey = "sb_publishable_AleX6LffvNE7iucdl4ADJw_QhO-gwBH";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});