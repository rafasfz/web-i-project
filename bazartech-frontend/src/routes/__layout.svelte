<script>
  import { page } from '$app/stores';
</script>

<ul>
  <li>bazartech</li>
  {#if $page.url.pathname !== '/sign-up'}
    <li><a href="/sign-up">Criar conta</a></li>
  {/if}
  {#if $page.url.pathname !== '/'}
    <li><a href="/">Login</a></li>
  {/if}
</ul>

<slot />

<footer>bazartech © 2022 Todos os direitos reservados - Ana Carolina / Cácio Lucas / Rafael.</footer>