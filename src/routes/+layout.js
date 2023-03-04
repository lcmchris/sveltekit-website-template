import { getSupabase } from '@supabase/auth-helpers-sveltekit';

/** @type {import('./$types').LayoutLoad} */
export async function load(event) {
    const { session } = await getSupabase(event);
    return { session };
};