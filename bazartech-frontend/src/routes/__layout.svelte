<script>
  import { page } from '$app/stores';
  import { user } from '../stores/user';
</script>

<div class="flex-wrapper">
  <header>
    <ul>
      <li class="title">bazartech</li>
      <div class="right-menu">
        <li>Anúncios</li> |
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