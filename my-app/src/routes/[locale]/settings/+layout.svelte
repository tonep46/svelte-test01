<script>
    /** @type {import('./$types').LayoutData} */
    export let data;
  </script>
  
  <h1>Settings</h1>
  
  <div class="submenu">
    {#each data.sections as section}
      <a href="/settings/{section.title}">{section.title}</a>
    {/each}
  </div>
  
  <slot></slot>