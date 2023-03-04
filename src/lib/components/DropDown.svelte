<script>
  import { fade } from 'svelte/transition';
  import Image from '$lib/components/Image.svelte';

  const fadeIn = {
    delay: 100,
    duration: 200
  };

  const fadeOut = {
    delay: 0,
    duration: 100
  };

  let isExpanded = false;
  import { page } from '$app/stores';

  export let nav;
</script>

<nav class="dropdown" class:expanded={isExpanded}>
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    on:click={() => (isExpanded = !isExpanded)}
    on:keydown={() => (isExpanded = !isExpanded)}
    style="width: 50px; height: 50px; cursor: pointer;"
  >
    <circle cx="19" cy="19" r="19" fill="var(--light-grey" fill-opacity="0.15" />
    <path
      d="M12.668 25.3333H25.3346M12.668 19.7917H25.3346M12.668 14.25H25.3346"
      stroke="url(#paint0_linear_659_4959)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_659_4959"
        x1="12.6551"
        y1="19.7919"
        x2="25.3444"
        y2="19.7919"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--primary)" />
        <stop offset="1" stop-color="var(--grey)" />
      </linearGradient>
    </defs>
  </svg>

  {#if isExpanded}
    <div
      in:fade={fadeIn}
      out:fade={fadeOut}
      class="content-box row"
      style="gap:25px; align-items:right; width: 100%; position: relative; left: -35px; top: 35px; text-align:right"
    >
      <div class="contents">
        {#each nav as item}
          <a
            href={item.path}
            class:active={$page.url.pathname === item.path}
            style="color: var(--black-grey);"
            on:click={() => (isExpanded = !isExpanded)}>{item.title}</a
          >
        {/each}
      </div>
    </div>
  {/if}
</nav>

<style>
  .expanded {
    transition: ease-out 1000ms;
    gap: 100px;
  }
  .contents {
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: var(--off-white);
    padding: 10px;
    border-radius: 10px;
  }
</style>
