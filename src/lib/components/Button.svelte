<script>
  import { createEventDispatcher } from 'svelte';
  import { page } from '$app/stores';
  import Image from './Image.svelte';
  export let type = '';
  export let class_style = '';
  export let style = '';
  export let href = '';
  export let disabled = false;
  export let icon = '';
  export let icon_position = 'left';
  export let justify_content = 'center';

  const dispatch = createEventDispatcher();
  /**
   * Button click handler
   */
  function onClick(event) {
    dispatch('click', event);
  }
</script>

{#if type == 'link'}
  <a
    {href}
    class="button {class_style}"
    {style}
    {disabled}
    class:active={$page.url.pathname === href}
  >
    <div class="content-box row" style="gap: 20px; width:100%; justify-content:{justify_content}">
      {#if icon && icon_position == 'left'}
        <img
          src={icon}
          alt="icon"
          style="height: 2em; width: 2em; padding-left: 24px;"
          class:active={$page.url.pathname === href}
        />
      {/if}
      <slot />
      {#if icon && icon_position == 'right'}
        <img
          src={icon}
          alt="icon"
          style="height: 2em; width: 2em; padding-right: 24px;"
          class:active={$page.url.pathname === href}
        />
      {/if}
    </div>
  </a>
{:else if type == 'submit'}
  <button type="submit" class="button {class_style}" {style} {disabled} on:click={onClick}>
    {#if icon && icon_position == 'left'}
      <Image src={icon} alt="icon" style="height: 2em; width: 2em; padding-right: 24px;" />
    {/if}
    <slot />
    {#if icon && icon_position == 'right'}
      <Image src={icon} alt="icon" style="height: 2em; width: 2em; padding-right: 24px;" />
    {/if}
  </button>
{:else}
  <button type="button" class="button {class_style}" {style} {disabled} on:click={onClick}>
    {#if icon && icon_position == 'left'}
      <Image src={icon} alt="icon" style="height: 2em; width: 2em; padding-right: 24px;" />
    {/if}
    <slot />
    {#if icon && icon_position == 'right'}
      <Image src={icon} alt="icon" style="height: 2em; width: 2em; padding-right: 24px;" />
    {/if}
  </button>
{/if}

<style>
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }
  img.active {
    filter: brightness(0) saturate(100%) invert(69%) sepia(66%) saturate(440%) hue-rotate(358deg)
      brightness(91%) contrast(93%);
  }
  .button {
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    cursor: pointer;
    padding: 10px 24px;

    white-space: nowrap;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    box-shadow: 0 1px 2px 0 rgba(105, 81, 255, 0.05), 0 3px 17px -5px rgba(104, 104, 104, 0.5);
    color: var(--pure-white);
    background-color: var(--primary);
  }

  .button.text {
    color: var(--base-color-1);
    background-color: var(--pure-white);
  }

  /* Gradient Style */
  .button.gradient {
    color: var(--pure-white);
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
      linear-gradient(101deg, var(--primary), var(--secondary));
  }

  .button.gradient_animated {
    border: solid 3px transparent;
    color: var(--base-color-1);
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
      linear-gradient(101deg, var(--primary), var(--secondary));
    background-origin: border-box;
    background-clip: border-box;
    box-shadow: 2px 1000px 1px #fff inset;
  }

  .button.gradient_animated:hover {
    box-shadow: none;
    color: var(--pure-white);
    transition: ease-out 200ms;
  }

  /* White Style */
  .button.white {
    color: var(--elephant-grey);
    background-color: var(--pure-white);
    border: 1px solid var(--solitude);
    box-shadow: none;
  }

  .link_style {
    background: none;
    border: none;
    padding: 0;
    box-shadow: none;
    color: var(--primary);
    text-decoration: none;
    cursor: pointer;
  }

  /* Icon style */
  .icon_style {
    background-color: none;
    background: none;
    border: none;
    padding: 0;
    box-shadow: none;
    color: var(--primary);
    text-decoration: none;
    cursor: pointer;
  }

  /* tile Style */

  .tile_style {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 224px;
    height: 44px;
    background-color: var(--pure-white);
    border-radius: 10px;
    color: var(--grey);
    padding: 0;
    box-shadow: none;
  }

  .tile_style.active {
    background-color: var(--blended-light);
  }

  .tile_style:hover:not(.active) {
    background-color: var(--super-light-grey);
  }

  a.tile_style {
    color: var(--grey);
  }
  a.tile_style.active {
    color: var(--primary);

    text-decoration-line: none;
  }
  a.tile_style:hover:not(.active) {
    text-decoration-line: none;
  }

  @media screen and (max-width: 768px) {
    .content-box.row {
      flex-direction: row;
    }
  }
</style>
