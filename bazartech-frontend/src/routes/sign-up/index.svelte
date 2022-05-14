<script>
  import axios from 'axios';

  let email = '';
  let password = '';
  let name = '';
  let username = '';
  let confirm_password = '';
  let address = {
    city: '',
    state: '',
    zip_code: '',
    street: '',
    number: '',
    district: '',
  };

  axios.get(`${import.meta.env.VITE_API_URL}/auth/users`, 
    {headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }}
  ).then(response => {
      const { data } = response;
      console.log(data);
  }).catch(error => {
      console.log(error);
  });
</script>

<h1>Faça parte do bazar</h1>

<p>Compre e anuncie seus produtos de forma prática e fácil  para os alunos do IMD.</p>

<div>
  <h1>Criar conta</h1>
  <form action="/auth/sign-up" method="POST">
    <input type="text" name="email" id="email" placeholder="E-mail" bind:value={email} />
    <input type="text" name="name" id="name" placeholder="Nome" bind:value={name}>
    <input type="text" name="username" id="username" placeholder="Nome de usuário" bind:value={username} />
    <input type="password" name="password" placeholder="Senha" bind:value={password} />
    <input type="password" name="confirm_password" placeholder="Insira a senha novamente" bind:value={confirm_password} />
    Endereco:
    <input type="text" name="address.city" id="address.city" placeholder="Cidade" bind:value={address.city} />
    <input type="text" name="address.state" id="address.state" placeholder="Estado" bind:value={address.state} />
    <input type="text" name="address.zip_code" id="address.zip_code" placeholder="CEP" bind:value={address.zip_code} />
    <input type="text" name="address.street" id="address.street" placeholder="Rua" bind:value={address.street} />
    <input type="text" name="address.number" id="address.number" placeholder="Número" bind:value={address.number} />
    <input type="text" name="address.district" id="address.district" placeholder="Bairro" bind:value={address.district} />

    <input type="submit" name="submit" id="submit" />
  </form>
</div>