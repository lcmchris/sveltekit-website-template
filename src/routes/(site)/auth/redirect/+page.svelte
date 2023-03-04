<script lang="ts">
  // This page is used to redirect the user to the dashboard if they are logged in. This is because the session when redirected aren't getting populated on the server side.
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Spinner from '$lib/components/Spinner.svelte';
  import { onMount } from 'svelte';


  onMount(() => {
    const redirectTo = $page.url.searchParams.get('redirectTo');
    if ($page.data.session) {
      goto(redirectTo ?? '/auth');
    }
  });
</script>

<section>
  <div>
    <Spinner />
  </div>
</section>

<style>
</style>
