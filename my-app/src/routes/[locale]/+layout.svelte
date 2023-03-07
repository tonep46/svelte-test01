
<script>
      /** @type {import('./$types').PageData} */
      export let data;
    </script>
    
    <div class="submenu">
     
<nav>
    <a href="/">Home</a>
    <a href="{data.title}/about">about</a>
    <a href="{data.title}/contact">Contact us</a>
    <a href="{data.title}/blog">Blog</a>
    <a href="{data.title}/settings">Setting</a>
    </nav>

      </div>


<slot></slot>
