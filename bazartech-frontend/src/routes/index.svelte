<script>
  import { goto } from '$app/navigation';
  import * as cookie from 'cookie';

  let email = '';
  let password = '';
  let remeber_password = false;
</script>

<div class="flex-wrapper">
  <div class="content">
    <h2>Anuncie ou compre de maneira mais fácil</h2>
  
    <p>Bazartech surgiu da necessidade dos alunos do IMD de anunciar e comprar equipamentos tecnológicos seminovos, conservados e com ótimo preço.</p>
  
    <ul>
      <li>Anunciar peças e equipamentos</li>
      <li>Buscar equipamentos seminovos e conservados</li>
      <li>Comprar peças e equipamentos com ótimos preços</li>
    </ul>
  </div>
  
  <div class="login">
    <form action="/auth/login/" method="post">
      <input type="text" name="username" id="username" placeholder="usuário" bind:value={email} /> <br>
      <input type="password" name="password" placeholder="Senha" bind:value={password} /> <br>
      <input type="checkbox" name="remeber_password" id="remeber_password" bind:value={remeber_password} />
      <label for="remeber_password">Lembrar senha</label> <br>
      <input type="submit" name="submit" id="submit" />
    </form>
  </div>
</div>