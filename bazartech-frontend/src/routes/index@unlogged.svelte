<style>
	#login-content{
    width: 100%;
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  #login-content .content {
    display: grid;
    grid-template-columns: 550px 1fr;
    color: var(--primary-color)
  }
  #login-content .content h1 {
    word-break: break-word;
    margin-bottom: .8rem;
  }
  #login-content .content .info {
    word-wrap: break-word;
  }

  #login-content .content .info p {
    text-align: justify;
  }

  #login-content .content .info .info-list {
    padding: 1rem;
  }
  #login-content .content .info .info-list li{
    margin: .8rem 0;
  }

  #login-content .content .image {
    width: 30rem;
    margin: 0 5rem;
  }
  #login-content .content .image img {
    width: 100%;
  }

  #login-content .form{
    color: var(--primary-color);
    margin: 10rem 0;
  }

  #login-content .form h2 {
    margin: 0 0 .8rem 0;
  }

  #login-content .form .password-content {
    margin: 0 0 .8rem 0;
  }

  :global(form input:not(input[type="checkbox"])){
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  :global(.btn-submit) {
    width: 300px;
    background: var(--btn-color);
    cursor: pointer;
  }

  :global(.btn-submit:hover) {
    background: var(--btn-color-hover);
  }

  :global(.btn-container){
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1600px){
    #login-content .content .image {
      width: 25rem;
    }
  }

  @media (max-width: 1400px){

    #login-content {
      grid-template-columns: 1fr;
    }
    #login-content .content .image {
      width: 25rem;
    }

    :global(.btn-submit){
      width: -webkit-fill-available;
    }

    #login-content .content {
      grid-template-columns: 50% 50%;
    }

    #login-content .form {
      border: 1px solid #e9e9e9;
      padding: 50px;
      border-radius: 20px;
    }
  }

  @media (min-width: 1500px){
    #login-content .content {
      color: white;
    }
  }

  @media(max-width: 990px){
    #login-content .content .image {
      display: none;
    }

    #login-content .content {
      grid-template-columns: 1fr;
    }

    #login-content .form {
      margin: 0;
    }
  }



</style>


<script>
  import { goto } from '$app/navigation';
  import * as cookie from 'cookie';
  import loginImg from '/src/assets/login-image.svg';

  let email = '';
  let password = '';
  let remeber_password = false;
</script>

<div id="login-content">
  <div class="content">
    <div class="text">
      <h1>Anuncie ou compre de maneira mais fácil</h1>
      <div class="info">
        <p><strong>Bazartech</strong> surgiu da necessidade dos alunos do <strong>IMD</strong> de anunciar e comprar equipamentos tecnológicos seminovos, conservados e com ótimo preço.</p>
      
        <ul class="info-list">
          <li>Anunciar peças e equipamentos</li>
          <li>Buscar equipamentos seminovos e conservados</li>
          <li>Comprar peças e equipamentos com ótimos preços</li>
        </ul>
      </div>
    </div>
    <div class="image">
      <img src={loginImg} alt="Ilustração simulando o sistema Bazartech">
    </div>
  </div>
  
  <div class="form">
    <h2>Login</h2>
    <form action="/auth/login/" method="post">
      <input type="text" name="username" id="username" placeholder="Usuário" bind:value={email} required/> <br>
      <input type="password" name="password" placeholder="Senha" bind:value={password} required/> <br>
      <div class="password-content">
        <input type="checkbox" name="remeber_password" id="remeber_password" bind:value={remeber_password}/>
        <label for="remeber_password">Lembrar senha</label> <br>
      </div>
      <div class="btn-container">
        <button type="submit" name="submit" id="submit"  class="btn btn-submit">Login</button>
      </div>
    </form>
  </div>
</div>