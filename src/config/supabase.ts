import { APP_SUPABASE_KEY, APP_SUPABASE_URL } from '@/utils'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(APP_SUPABASE_URL, APP_SUPABASE_KEY)
