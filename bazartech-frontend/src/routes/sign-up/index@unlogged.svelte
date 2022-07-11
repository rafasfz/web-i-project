<style>

  #adduser-content {
    width: 100%;
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  #adduser-content  .content {
    display: grid;
    grid-template-columns: 550px 1fr;
    color: var(--primary-color)
  }
  #adduser-content  .content h1 {
    word-break: break-word;
    margin-bottom: .8rem;
  }

  #adduser-content #budget{
    color: var(--btn-color);
    font-size: .9rem;
  }

  #adduser-content .content .info {
    word-wrap: break-word;
    color: #B6BCC3;
    font-size: 1.2rem;
  }

  #adduser-content .content .info p {
    text-align: justify;
  }

  #adduser-content .content .text{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 45vh;

  }
  #adduser-content .content .image {
    width: 35rem;
    margin: 0 5rem;
  }
  #adduser-content .content .image img {
    width: 100%;
  }

  #adduser-content .form{
    color: var(--primary-color);
    margin: 10rem 0;
  }

  #adduser-content .form input{
    margin: 1rem 0;
  }

  #adduser-content .form h2 {
    margin: 0 0 .8rem 0;
  }

  #adduser-content .form .password-content {
    margin: 0 0 .8rem 0;
  }

  @media (max-width: 1600px){
    #adduser-content .content .image {
      width: 25rem;
    }
  }

  @media (min-width: 1500px){
    #adduser-content .content {
      color: white;
    }
  }

  @media (max-width: 1400px){
    #adduser-content #budget{
      color: var(--second-color);
    }

    #adduser-content .info{
     font-weight: bold;
    }
    #adduser-content  {
      grid-template-columns: 1fr;
    }
    #adduser-content  .content .image {
      width: 25rem;
    }
    #adduser-content  .content {
      grid-template-columns: 50% 50%;
    }

    #adduser-content  .form {
      border: 1px solid #e9e9e9;
      padding: 50px;
      border-radius: 20px;
    }
  }

  @media(max-width: 990px){
    #adduser-content .content .image {
      display: none;
    }

    #adduser-content .content {
      grid-template-columns: 1fr;
    }

    #adduser-content .form {
      margin: 0;
    }
  }

</style>

<script>
  import axios from 'axios';
  import addUserImg from '/src/assets/add-count-image.svg';

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

<div id="adduser-content">
  <div class="content">
    <div class="text">
      <span id="budget">ANUNCIE OU COMPRE SEUS EQUIPAMENTOS</span>
      <h1>Faça parte do bazar</h1>
      <div class="info">
        <p>Compre e anuncie seus produtos de forma prática e fácil  para os alunos do IMD.</p>
      </div>
    </div>
    <div class="image">
      <img src={addUserImg} alt="Ilustração simulando o sistema Bazartech">
    </div>
  </div>
  
  <div class="form">
    <h1>Criar conta</h1>
    <form action="/auth/sign-up" method="POST">
      <div>
        <input type="text" name="email" id="email" placeholder="E-mail" bind:value={email} required/>
        <input type="password" name="password" placeholder="Senha" bind:value={password} required/>
        <input type="password" name="confirm_password" placeholder="Insira a senha novamente" bind:value={confirm_password} required/>
      </div>
      <!-- <div>
        <p>Dados Pessoais:</p>
        <input type="text" name="name" id="name" placeholder="Nome" bind:value={name}>
        <input type="text" name="username" id="username" placeholder="Nome de usuário" bind:value={username} />
      </div>
      <div>
        <p>Endereço</p>
        <input type="text" name="address.city" id="address.city" placeholder="Cidade" bind:value={address.city} />
        <input type="text" name="address.state" id="address.state" placeholder="Estado" bind:value={address.state} />
        <input type="text" name="address.zip_code" id="address.zip_code" placeholder="CEP" bind:value={address.zip_code} />
        <input type="text" name="address.street" id="address.street" placeholder="Rua" bind:value={address.street} />
        <input type="text" name="address.number" id="address.number" placeholder="Número" bind:value={address.number} />
        <input type="text" name="address.district" id="address.district" placeholder="Bairro" bind:value={address.district} />
      </div> -->
      <div class="btn-container">
        <button type="submit" name="submit" id="submit"  class="btn btn-submit">Cadastrar</button>
      </div>
    </form>
  </div>
</div>
