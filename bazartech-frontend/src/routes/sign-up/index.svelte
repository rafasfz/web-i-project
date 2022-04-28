<script>
  let email = '';
  let password = '';
  let confirm_password = '';

  const handleSubmit = () => {
    console.log(email, password, confirm_password);
    // Cadastrar na API
    // Logar na API
    // Adicionar user no store de usuarios
    // Adicionar user e token no cookie o localstorage
    // Redirecionar para a home
  };
</script>

<h1>Faça parte do bazar</h1>

<p>Compre e anuncie seus produtos de forma prática e fácil  para os alunos do IMD.</p>

<div>
  <h1>Criar conta</h1>
  <form action="" on:submit|preventDefault={handleSubmit}>
    <input type="text" name="email" id="email" placeholder="E-mail" bind:value={email} />
    <input type="password" name="password" placeholder="Senha" bind:value={password} />
    <input type="password" name="confirm_password" placeholder="Insira a senha novamente" bind:value={confirm_password} />
    <input type="submit" name="submit" id="submit" />
  </form>
</div>