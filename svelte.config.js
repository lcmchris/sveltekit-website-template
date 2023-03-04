import vercel from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // default options are shown
    adapter: vercel({
      edge: false,
      external: [],
      split: false
    })
  }
  ,
  extensions: ['.svelte', '.md'],


  preprocess: [
    mdsvex({
      extensions: ['.md'],
    })
  ]
};

export default config;
