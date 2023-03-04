<script>
  import Button from '$lib/components/Button.svelte';
  import Image from '$lib/components/Image.svelte';
  import Section from '$lib/components/Section.svelte';
  import { PUBLIC_COMPANY_NAME } from '$env/static/public';
</script>

<svelte:head>
  <title>{PUBLIC_COMPANY_NAME}</title>
  <meta
    name="description"
    content="The Silly Home uses AI to automate your home. Our solution reduces friction between you
  and your smart home devices, reducing effort and maximising comfort."
  />
</svelte:head>

<main data-scroll-container>
  <Section>
    <div class="content-box ">
      <div>
        <h3 class="subheading-2">HEADING</h3>
        <h2>SUB HEADING</h2>
        <body>
          BODY TEXT. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. NullamLorem ipsum dolor sit amet, consectetur
          adipiscing elit. NullamLorem ipsum dolor sit amet, consectetur adipiscing elit.
          NullamLorem ipsum dolor sit amet, consectetur adipiscing elit. NullamLorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nullam
        </body>
      </div>
    </div>
  </Section>

  <Section>
    <div class="content-box ">
      <div>
        <h3 class="subheading-2">HEADING</h3>
        <h2>SUB HEADING</h2>
        <body>
          BODY TEXT. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. NullamLorem ipsum dolor sit amet, consectetur
          adipiscing elit. NullamLorem ipsum dolor sit amet, consectetur adipiscing elit.
          NullamLorem ipsum dolor sit amet, consectetur adipiscing elit. NullamLorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nullam
        </body>
      </div>
    </div>
    <div class="content-box ">
      <Image
        style="width: 80%; height: 80%;
      "
      />
    </div>
  </Section>
  <Section>
    <div class="content-box ">
      <Image style="width: 80%; height: 80%" />
    </div>
    <div class="content-box ">
      <div>
        <h3 class="subheading-2">HEADING</h3>
        <h2>SUB HEADING</h2>
        <body>
          BODY TEXT. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. NullamLorem ipsum dolor sit amet, consectetur
          adipiscing elit. NullamLorem ipsum dolor sit amet, consectetur adipiscing elit.
          NullamLorem ipsum dolor sit amet, consectetur adipiscing elit. NullamLorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nullam
        </body>
      </div>
    </div>
  </Section>

  <Section class_style="dark">
    <div class="content-box ">
      <Image style="width: 80%; height: 80%" />
    </div>
    <div class="content-box ">
      <div>
        <h3 class="subheading-2">HEADING</h3>
        <h2>SUB HEADING</h2>
        <body>
          BODY TEXT. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. NullamLorem ipsum dolor sit amet, consectetur
          adipiscing elit. NullamLorem ipsum dolor sit amet, consectetur adipiscing elit.
          NullamLorem ipsum dolor sit amet, consectetur adipiscing elit. NullamLorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nullam
        </body>
      </div>
    </div>
  </Section>

  <Section>
    <div class="content-box" style="align-items: center;">
      <h2>Our Team.</h2>
      <div class="content-box row" style="gap:100px; text-align: center;">
        <div>
          <Image
            alt="founder_image"
            src="/images/founder_image.svg"
            style="width: 707px;
          height: 444px;"
          />
          <div>
            <h3 class="subheading-1" style="color:var(--primary)">Christopher Lai</h3>
            <body>Founder & CEO</body>
          </div>
        </div>
      </div>
    </div>
  </Section>
</main>

<style>
</style>
