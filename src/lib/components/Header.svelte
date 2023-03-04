<script>
  import { page } from '$app/stores';
  import Button from '$lib/components/Button.svelte';
  import DropDown from '$lib/components/DropDown.svelte';
  import Socials from '$lib/components/Socials.svelte';
  import Logo from '$lib/components/Logo.svelte';

  export let nav = [];
  let Y = 0;
  let X = 0;
</script>

<svelte:window bind:scrollY={Y} bind:outerWidth={X} />

{#if X > 1176}
  <header class="nav1">
    <nav class:shadow={Y != 0}>
      <div class="nav-flex row">
        <Logo />

        <div class="nav-flex row">
          {#each nav as item}
            <li style="width: 100px">
              <a href={item.path} class:active={$page.url.pathname === item.path}>{item.title}</a>
            </li>
          {/each}
        </div>

        <div style="display: flex; gap:30px; align-items:center; justify-content:center">
          <Button type="link" href="/auth?signup=True" style="height:2vh">Sign Up</Button>
          <Socials />
        </div>
      </div>
    </nav>
  </header>
{:else}
  <header class="nav2">
    <nav class:shadow={Y != 0}>
      <div class="nav-flex">
        <div>
          <Button type="link" href="/auth?signup=True" style="margin-bottom: 10px">Sign Up</Button>
          <Socials />
        </div>
        <DropDown {nav} />
      </div>
    </nav>
  </header>
{/if}

<style>
  .nav-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10vh;
    width: 80%;
  }
  .nav-flex.row {
    flex-direction: row;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: var(--pure-white);
  }

  nav {
    height: 12vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    transition: box-shadow 0.5s ease-in-out;
  }

  nav.shadow {
    box-shadow: 0 0 15px var(--grey);
  }

  /* Style the links inside the navigation bar */
  nav a {
    /* margin: 62px 0px 31px 0px; */
    color: var(--black-grey);
    text-align: right;
    font-size: 16px;
    line-height: 19px;
  }

  .nav2 {
    display: block;
  }
  @media only screen and (max-width: 1176px) {
    .nav2 .nav-flex {
      flex-direction: row;
      justify-content: space-between;
      width: 80%;
      gap: 0px;
    }
  }
</style>
