<script>
  import { page } from '$app/stores';
  import { user } from '../stores/user';
</script>

<style>
  li {
    display: inline;
  }

  .title {
    font-size: 1.5em;
    text-align: center;
  }

  .right-menu {
    float: right;
    display: inline;
  }

  .menu-button {
    background-color: #FAF4D3;
    padding: 8px;
    border-radius: 20px;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .flex-wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
  }

  footer {
    text-align: center;
    font-size: 0.8em;
    margin-top: auto;
  }

  .content {
    margin: 0 20px;
  }
</style>

<div class="flex-wrapper">
  <header>
    <ul>
      <li class="title">bazartech</li>
      <div class="right-menu">
        <li>Anúncios |</li>
      {#if $page.url.pathname !== '/sign-up' && !$user}
        <li class="menu-button"><a href="/sign-up">Criar conta</a></li>
      {/if}
      {#if $page.url.pathname !== '/' && !$user}
        <li class="menu-button"><a href="/">Login</a></li>
      {/if}
      </div>
    </ul>
  </header>
  
  <div class="content">
    <slot />
  </div>
  
  <footer>bazartech © 2022 Todos os direitos reservados - Ana Carolina / Cácio Lucas / Rafael.</footer>
</div>