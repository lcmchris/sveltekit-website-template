<script>
  import Socials from '$lib/components/Socials.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import { PUBLIC_COMPANY_NAME } from '$env/static/public';
</script>

<footer>
  <div class="content-box row">
    <div class="content-box" style="gap:10px">
      <Logo />
      <body style="color:var(--elephant-grey);"> Build smarter homes.</body>
      <Socials />
      <body class="subscript" style="color:var(--grey);"
        >© 2022 {PUBLIC_COMPANY_NAME}. All rights reserved.</body
      >
    </div>
  </div>
</footer>

<style>
  div {
    flex-grow: 0;
    padding: 20 20 20 20;
  }

  footer {
    margin: 0 0 0;
    padding: 64px 0 64px 0;
  }
</style>
