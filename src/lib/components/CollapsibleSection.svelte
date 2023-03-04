<script>
  export let title = '';
  export let style = '';
  export let expanded = false;
</script>

<div class="collapsable content-box responsive" {style}>
  <div {style} class="section responsive">
    <h3 class="subheading-1">{title}</h3>

    <button on:click={() => (expanded = !expanded)}
      ><img src="/icon/Down.svg" class="arrow {expanded === true ? 'expanded' : ''}" alt={title} />
    </button>
  </div>
  <body class="contents responsive {expanded === false ? 'hide' : ''}" style="padding: 20px;">
    <slot />
  </body>
</div>

<style>
  .section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .hide {
    display: none;
  }
  .content-box {
    gap: 0;
  }
  .contents {
    align-self: flex-start;
  }

  .arrow {
    width: 40px;
    height: 40px;
    filter: invert(81%) sepia(6%) saturate(186%) hue-rotate(193deg) brightness(82%) contrast(94%);
  }
  .arrow.expanded {
    transform: rotate(180deg);
    filter: none;
  }
</style>
