<script>
  import { lazyLoad } from '$lib/assets/js/LazyLoadImage.js';
  import { createEventDispatcher } from 'svelte';

  // receive props, but have default fallbacks
  export let src = '';
  export let alt = 'Dummy title';
  export let style = '';

  const dispatch = createEventDispatcher();

  function onClick(event) {
    dispatch('click', event);
  }
  function onKeyDown(event) {
    dispatch('keydown', event);
  }

  let fallback = '/images/empty.svg';
  function handleError(event) {
    event.target.src = fallback;
  }
</script>

<img
  use:lazyLoad={src}
  {alt}
  {style}
  on:click={onClick}
  on:keydown={onKeyDown}
  on:error={handleError}
/>
