<script>
  import { enhance } from '$app/forms';
  import { supabaseClient } from '$lib/db';
  import { page } from '$app/stores';
  import Button from '$lib/components/Button.svelte';

  import Image from '$lib/components/Image.svelte';
  import Divider from '$lib/components/Divider.svelte';
  import Section from '$lib/components/Section.svelte';

  /** @type {import('./$types').ActionData} */
  export let form;
  export let data;

  let login = true;
  let forgotPassword = false;
  let signup = false;
  let passwordType = 'password';

  const regexPassword = '(?=.*?[A-z])(?=.*?[0-9]).{8,}';
  const regexEmail = '.+@.+\\..+';

  let X;

  const { baseURL } = data;

  const isSignUp = $page.url.searchParams.get('signup');
  if (isSignUp === 'True') {
    login = false;
    forgotPassword = false;
    signup = true;
  }

  import { PUBLIC_COMPANY_NAME } from '$env/static/public';
</script>

<svelte:window bind:outerWidth={X} />
<svelte:head>
  <title>Sign Up to {PUBLIC_COMPANY_NAME}</title>
  <meta name="description" content="Click here to log in or sign up to {PUBLIC_COMPANY_NAME}." />
</svelte:head>

<main>
  <Section>
    {#if X > 1176}
      <div class="content-box row left-background">
        <div class="content-box left-panel">
          <div>
            <h2 class="typewriter" style="color:var(--primary)">
              Welcome to {PUBLIC_COMPANY_NAME}
            </h2>
          </div>
          <body
            >Our smart home solutions bring comfort, flexibility and energy efficiency while keeping
            your data anonymous and secure.</body
          >
        </div>
      </div>
    {/if}

    <div class="content-box row right-background">
      <div class="content-box right-panel">
        {#if login}
          <!-- Login -->
          <h2 style="margin-top:104px">Welcome home!</h2>

          <Button
            type="button"
            class_style="white"
            icon="/icons/google.svg"
            on:click={() => {
              supabaseClient.auth.signInWithOAuth({
                provider: 'google',
                options: {
                  redirectTo: `${baseURL}/auth/redirect?redirectTo=/`
                }
              });
            }}>Continue with Google</Button
          >

          <Divider style="margin-top: 12px">or</Divider>
          <form
            style="margin-top: 4px;"
            method="POST"
            use:enhance
            on:submit={() => (form.error = null)}
            action="?/login"
          >
            <body class="button_text">Email</body>
            <input
              name="email"
              type="email"
              required
              pattern={regexEmail}
              placeholder="Enter your email"
              title="Please enter a valid email address."
            />
            <div class="content-box row" style="justify-content:space-between; margin-top:24px">
              <body class="button_text">Password</body>
              <Button
                class_style="link_style"
                on:click={() => {
                  (login = false), (forgotPassword = true), (signup = false), (form = null);
                }}>Forgot password?</Button
              >
            </div>
            <div class="content-box row" style="gap:0px">
              <input
                name="password"
                type={passwordType}
                required
                pattern={regexPassword}
                placeholder="*******"
                title="Minimum eight characters, at least one letter and one number"
              />
              <Button
                type="button"
                class_style="icon_style"
                icon_position="right"
                icon="/icon/show.svg"
                style="margin-left: -50px;"
                on:click={() => {
                  if (passwordType === 'password') {
                    passwordType = 'text';
                  } else {
                    passwordType = 'password';
                  }
                }}
              />
            </div>
            {#if form?.error}
              <div class="shake">
                <Button
                  type="submit"
                  class_style="gradient"
                  style="width:100%; margin-top: 24px; height: 52px;">Log In</Button
                >
                <body style="color: var(--alizarin); ">{form.error}</body>
              </div>
            {:else}
              <div class="none">
                <Button
                  type="submit"
                  class_style="gradient"
                  style="width:100%; margin-top: 24px; height: 52px;">Log In</Button
                >
              </div>
            {/if}
          </form>

          <div class="content-box row" style="justify-content:space-between; margin-top: 48px;">
            New to {PUBLIC_COMPANY_NAME}?<span
              ><Button
                class_style="link_style"
                on:click={() => {
                  (login = false), (forgotPassword = false), (signup = true), (form = null);
                }}>Create an account</Button
              >
            </span>
          </div>

          <!-- Sign up -->
        {:else if signup}
          <!-- <Button
            class_style="link_style"
            style="align-self: flex-end;"
            on:click={() => {
              (login = true), (forgotPassword = false), (signup = false), (form = null);
            }}><body><span style="color: var(--grey)">&#8592; Back to </span> login</body></Button
          > -->
          <h2>Create an account</h2>

          <Button
            type="button"
            class_style="white"
            style="margin-top: 28px; width:100%"
            icon="/icons/google.svg"
            on:click={() => {
              supabaseClient.auth.signInWithOAuth({
                provider: 'google',
                options: {
                  redirectTo: `${baseURL}/auth/redirect?redirectTo=/`
                }
              });
            }}>Continue with Google</Button
          >
          <Divider style="margin-top: 12px">or</Divider>

          <form style="margin-top: 4px" method="POST" use:enhance action="?/signup">
            <body class="button_text">Email</body>
            <input
              name="email"
              type="email"
              required
              pattern={regexEmail}
              title=" Please enter a valid email address."
              placeholder="&#9993 Taylorcooke@gmail.com"
            />
            <body class="button_text" style="margin-top: 24px">Password</body>
            <input
              name="password"
              type="password"
              required
              pattern={regexPassword}
              placeholder="min 8 characters, at least one letter and one number"
              title="Minimum eight characters, at least one letter and one number"
            />

            <Button
              type="submit"
              class_style="gradient"
              style="width:100%; margin-top:24px; height: 52px;
            ">Sign up</Button
            >
          </form>

          <!-- Forgot password -->
        {:else if forgotPassword}
          <Button
            class_style="link_style"
            style="align-self: flex-end; margin-top:72px"
            on:click={() => {
              (login = true), (forgotPassword = false), (signup = false), (form = null);
            }}><body><span style="color: var(--grey)">&#8592; Back to </span> login</body></Button
          >
          <h2 style="margin-top:52px">Forgot your password?</h2>
          <body style="margin-top:12px; color: var(--grey)"
            >No worries, we'll send you your recovery instructions.</body
          >
          <form style="margin-top:32px" method="POST" use:enhance action="?/forgotPassword">
            <body class="button_text">Email</body>
            <input
              name="email"
              type="email"
              required
              pattern={regexEmail}
              title="Please enter a valid email address."
              placeholder="&#9993 Enter your email"
            />
            <Button
              type="submit"
              class_style="gradient"
              style="width:100%; margin-top:24px; height: 52px; margin-top:32px"
              >Send recovery email</Button
            >
          </form>
        {/if}
        <br />
        {#if form?.message}<p class="success">{form?.message}</p>{/if}
      </div>
    </div>
  </Section>
</main>

<style>
  main {
    background-color: var(--alice-blue);
  }

  .right-panel {
    width: 500px;
    height: 100%;
    gap: 0;
  }
  .right-background {
    width: 50vw;
  }
  form {
    width: 100%;
  }
  input {
    background-color: var(--pure-white);
  }

  .left-panel {
    gap: 24px;
    padding: 144px 62px 144px 62px;
    width: 380px;
    height: 220px;
    background-color: var(--pure-white);
  }

  .left-background {
    width: 50vw;
  }

  @media screen and (max-width: 1340px) {
    .content-box.row {
      flex-direction: row;
    }
  }

  .shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>
