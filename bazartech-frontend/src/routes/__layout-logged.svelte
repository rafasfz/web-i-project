<script>
  import logo from '/src/assets/bazartech.png';
  import { session } from '$app/stores';
  import { page } from '$app/stores';
</script>

<div class="flex-wrapper">
  <header>
    <ul id="header-content">
      <li class="title">
        <a href="/">
          <img  src={logo} alt="Logo do BazarTech">
        </a>
      </li>
      <div class="right-menu">
        <li id="anuncio">Anúncios</li> 
        <hr class="divider" width="1" size="30">
      {#if !$session.user && $page.url.pathname === '/'}
        <li class="btn menu-button"><a href="/sign-up">Criar conta</a></li>
      {/if}
      {#if !$session.user && $page.url.pathname === '/sign-up'}
       <li class="btn menu-button"><a href="/">Login</a></li>
      {/if}
      {#if $session.user}
        <li class="btn menu-button"><a href="/dashboard">Produtos</a></li>
      {/if}
      {#if $session.user}
        <li class="btn menu-button"><a href="/products/register">Anuncie aqui</a></li>
      {/if}
      {#if $session.user}
        <li class="btn menu-button"><a href="/auth/logout">Logout</a></li>
      {/if}
      </div>
    </ul>
  </header>
  
  <div class="content">
    <slot />
  </div>
  
  <footer>
        © 2022 Todos os direitos reservados - Ana Carolina / Cácio Lucas / Rafael.
  </footer>
</div>
