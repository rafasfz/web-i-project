<script>
  import { session } from '$app/stores';
</script>

<div class="flex-wrapper">
  <header>
    <ul>
      <li class="title">bazartech</li>
      <div class="right-menu">
        <li>Anúncios</li> |
      {#if !$session.user}
        <li class="menu-button"><a href="/sign-up">Criar conta</a></li>
      {/if}
      {#if !$session.user}
        <li class="menu-button"><a href="/">Login</a></li>
      {/if}
      {#if $session.user}
        <li class="menu-button"><a href="/dashboard">Produtos</a></li>
      {/if}
      {#if $session.user}
        <li class="menu-button"><a href="/products/register">Anuncie aqui</a></li>
      {/if}
      {#if $session.user}
        <li class="menu-button"><a href="/auth/logout">Logout</a></li>
      {/if}
      </div>
    </ul>
  </header>
  
  <div class="content">
    <slot />
  </div>
  
  <footer>bazartech © 2022 Todos os direitos reservados - Ana Carolina / Cácio Lucas / Rafael.</footer>
</div>