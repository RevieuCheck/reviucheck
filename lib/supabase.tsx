import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export type PreRegistration = {
    id: string
    full_name: string
    email: string
    company_name: string
    role: string
    plan_interest: string
    created_at: string
    status: 'pending' | 'contacted' | 'converted'
}