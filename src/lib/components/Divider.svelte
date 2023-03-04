<script>
  export let style = '';
</script>

<div class="separator" {style}><slot /></div>

<style>
  .separator {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    color: var(--light-grey);
  }

  .separator::before,
  .separator::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--solitude);
  }

  .separator:not(:empty)::before {
    margin-right: 32px;
  }

  .separator:not(:empty)::after {
    margin-left: 32px;
  }
</style>
