// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Supabase {
    Database: import('./DatabaseDefinitions').Database;
    SchemaName: 'public';
  }

  // interface Locals {}
  // interface PageData {
  //   session: import('@supabase/auth-helpers-sveltekit').Session | null;
  // }
  // interface PageData {

  // }

  // interface Platform {}

  // interface PrivateEnv {}

  // interface PublicEnv {}
}
