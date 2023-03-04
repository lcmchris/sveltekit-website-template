import { getSupabase, getServerSession } from '@supabase/auth-helpers-sveltekit';
import { redirect, error } from '@sveltejs/kit';
import '$lib/db';


/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    // protect requests to all routes that start with /app
    if (event.url.pathname.startsWith('/app')) {
        const { session, supabaseClient } = await getSupabase(event);

        if (!session) {
            console.log('No session, redirecting back to /auth')
            throw redirect(303, '/auth');
        }
    }

    // protect POST requests to all routes that start with /app
    if (
        event.url.pathname.startsWith('/app') &&
        event.request.method === 'POST'
    ) {
        const { session, supabaseClient } = await getSupabase(event);

        if (!session) {
            throw error(303, '/auth');
        }
    }

    return resolve(event);
};