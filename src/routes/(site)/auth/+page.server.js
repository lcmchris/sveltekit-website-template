


export const prerender = false;


import { redirect } from '@sveltejs/kit';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

/** @type {import('./$types').PageServerLoad} */
export function load({ url }) {
    return {
        baseURL: url.origin
    };
}


/** @type {import('./$types').Actions} */
export const actions = {
    login: async (event) => {
        console.log('Login with password...')
        const { request, cookies, url } = event;
        const { session, supabaseClient } = await getSupabase(event);
        const formData = await request.formData();

        const email = formData.get('email')
        const password = formData.get('password')

        const { error } = await supabaseClient.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            console.log('Error', error)
            if (error instanceof Error && error.status === 400) {
                return {
                    error: 'Invalid credentials.',
                    values: {
                        email
                    }
                };
            }
            return {
                error: 'Invalid credentials.',
                values: {
                    email
                }
            };
        }

        throw redirect(303, '/app/dashboard');
    },
    signup: async (event) => {
        console.log('Signup with password...')
        const { request, cookies, url } = event;
        const { session, supabaseClient } = await getSupabase(event);
        const formData = await request.formData();

        const email = formData.get('email')
        const password = formData.get('password')

        const { data, error } = await supabaseClient.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${url.origin}/auth/redirect?redirectTo=/auth/signup-success`,
                data: {
                    full_name: formData.get('full_name'),
                }
            }
        })

        if (error) {
            if (error instanceof Error && error.status === 400) {
                return {
                    error: 'Invalid new user.',
                    values: {
                        email
                    }
                };
            }
            return {
                error: 'Server error. Try again later.',
                values: {
                    email
                }
            };
        }
        console.log('data', data)
        console.log('error', error)

        throw redirect(303, '/auth/signup-success');
    },



    signout: async (event) => {
        const { supabaseClient } = await getSupabase(event);
        await supabaseClient.auth.signOut();
        throw redirect(303, '/');
    },
    forgotPassword: async (event) => {
        console.log('Forgot password...')
        const { request, cookies, url } = event;
        const { session, supabaseClient } = await getSupabase(event);
        const formData = await request.formData();

        const email = formData.get('email')

        const { data, error } = await supabaseClient.auth.resetPasswordForEmail(
            email,
            { redirectTo: `${url.origin}/auth/redirect?redirectTo=/app/profile` }

        )


        if (error) {
            if (error instanceof Error && error.status === 400) {
                return {
                    error: 'Invalid email.',
                    values: {
                        email
                    }
                };
            }
            return {
                error: 'Server error. Try again later.',
                values: {
                    email
                }
            };
        }

        return { message: 'Please check your email' }

    }
};