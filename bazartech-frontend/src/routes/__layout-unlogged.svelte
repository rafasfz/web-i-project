<script>
  import logo from '/src/assets/bazartech.png';
  import { session } from '$app/stores';
  import { page } from '$app/stores';
</script>


<style>
  :global(:root){
    --primary-color: #0C1618;
    --second-color: #004643;
    --btn-color: #FAF4D3;
    --btn-color-hover: #FAEEAA;
  }

  :global(html,body){
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    position: relative;
  }
	:global(*) {
		margin: 0;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    padding: 0;
    box-sizing: border-box;
	}

  :global(.btn) {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid var(--btn-color);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 50px;
    padding: 10px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    background: var(--btn-color);
  }
  .menu-button {
    width: 150px;
    background: var(--btn-color);
  }

  .menu-button:hover{
    background: var(--btn-color-hover);
  }

  .menu-button a {
    color: var(--primary-color)
  }

  header {
    background: var(--primary-color);
  }

  #header-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    padding: 40px 0;
    list-style: none;
  }

  .right-menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title img{
    width: 15rem;
  }

  .divider{
    margin: 0 .8rem;
  }

  :global(footer){
    width: 100%;
    margin: auto 0;
    position: absolute;
    bottom: auto;
    color: var(--second-color);
    text-align: center;
    padding: 20px;
    font-size: 14px;
  }
  
  .content {
    width: 90%;
    margin: 0 auto;
  }

  #anuncio {
    color:white;
  }

  @media (min-width: 1500px){
    :global(html,body){
      background: linear-gradient(-23deg, #FFF 48%, var(--primary-color) 45%)!important;
    }

    header {
      background: transparent;
    }

    :global(footer){
      bottom: 0;
    }
  }


  @media (max-width: 620px){
    .title img {
      width: 10rem;
    }

    .menu-button {
      width: max-content;
    }
  }

  @media (max-width: 370px){
    .title img {
      width: 6rem;
    }
  }



</style>


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
