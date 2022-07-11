<script>
  import {session} from '$app/stores';
  import { create } from 'ipfs-http-client';
  import Buffer from 'buffer';

  const ipfs = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    url: 'https://ipfs.infura.io:5001/api/v0'
  });

  let name = '';
  let description = '';
  let price = 0;
  let status = 1;
  let owner = $session.user.id;
  let favorite = [$session.user.id];
  let tags = [];
  let tag = '';
  let pictures = [];
  let image = {
    image: '',
    description: ''
  }
  let images = []
  let imageFile;

  const addTag = () => {

    if (!!tag) {
      tags.push(tag);
      tags = tags;
      tag = '';
    }
  }

  const removeTag = (index) => {
    tags.splice(index, 1);
    tags = tags;
  }

  const addImage = async () => {
    if(!imageFile) {
      console.log('nada');
      return;
    }

    try {
      const file = await ipfs.add(imageFile);
      image.image = `https://ipfs.infura.io/ipfs/${file.path}`;
      image.description = image.description;
      imageFile = null;
      images.push({...image});
      images = images;
    } catch (err) {
      console.log(err);
      return;
    }
  }

  const removeImage = (index) => {
    images.splice(index, 1);
    images = images;
  }

  const imageSelect = (e) => {
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(e.target.files[0]);

    reader.onloadend = () => {
      imageFile = Buffer.Buffer(reader.result);
    }
  }
</script>

<h1>Anuncie aqui</h1>
<form>
  <input type="text" name="name" id="name" placeholder="Nome" bind:value={name} required>
  <textarea type="text" name="description" id="description" placeholder="Descrição" bind:value={description} required></textarea>
  <input type="number" name="price" id="price" placeholder="Preço" bind:value={price} required>
  <div>
    <input type="text" name="tag" id="tag" placeholder="Tag" bind:value={tag}>
    <button on:click|preventDefault={addTag}>Adicionar tag</button>
  </div>
  <div>
    {#each tags as productTag, index}
      <span>{productTag} <button on:click|preventDefault={() => removeTag(index)}>x</button>, </span>
    {/each}
  </div>
  <div>
    <input type="file" accept="image/*" on:change={imageSelect}>
    <input type="text" placeholder="Descrição da foto" bind:value={image.description}>
    <button type="button" on:click|preventDefault={addImage}>Adicionar imagem</button>
  </div>
  <div>
    {#each images as productImage, index}
      <img src="{productImage.image}" alt="{productImage.description}" width="287" height="190" style="object-fit: cover;" />
      <button on:click|preventDefault={() => removeImage(index)}>x</button>
    {/each}
  </div>
  <input type="submit" value="Cadastrar produto">


</form>