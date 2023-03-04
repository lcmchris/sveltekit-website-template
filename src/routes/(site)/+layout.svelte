<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  const nav = [
    { title: 'About Us', path: '/about' },
    { title: 'Contact Us', path: 'mailto:christopher.lai@meetingdolphin.com' }
  ];
</script>

<Header {nav} />
<div class="main">
  <slot />
</div>

<Footer />

<style>
  .main {
    margin-top: 12vh;
  }
</style>
