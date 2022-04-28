<script>
  let email = '';
  let password = '';
  let remeber_password = false;

  const handleSubmit = () => {
    console.log(email, password, remeber_password);
    // Logar na API
    // Adicionar user no store de usuarios
    // Redirecionar para a home
    // Adicionar user e token no cookie o localstorage
  };
</script>

<h2>Anuncie ou compre de maneira mais fácil</h2>

<p>Bazartech surgiu da necessidade dos alunos do IMD de anunciar e comprar equipamentos tecnológicos seminovos, conservados e com ótimo preço.</p>

<ul>
  <li>Anunciar peças e equipamentos</li>
  <li>Buscar equipamentos seminovos e conservados</li>
  <li>Comprar peças e equipamentos com ótimos preços</li>
</ul>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" name="email" id="email" placeholder="E-mail" bind:value={email} />
  <input type="password" name="password" placeholder="Senha" bind:value={password} />
  <input type="checkbox" name="remeber_password" id="remeber_password" bind:value={remeber_password} />
  <label for="remeber_password">Lembrar senha</label>
  <input type="submit" name="submit" id="submit" />
</form>