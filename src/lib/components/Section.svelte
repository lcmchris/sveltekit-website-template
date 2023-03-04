<script>
  import viewport from '$lib/assets/js/useViewportAction';
  export let class_style = '';
  export let style = '';
</script>

<section
  use:viewport
  on:enterViewport={function () {
    this.classList.add('animate-fade');
  }}
  class={class_style}
  {style}
>
  <div class="content-box row margin">
    <slot />
  </div>
</section>

<style>
  section.dark {
    background: var(--black-grey);
    color: var(--super-light-grey);
  }
</style>
