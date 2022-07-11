<script>
  import { session } from "$app/stores";

  export let products = [];

</script>

<h1>Produtos</h1>
<div>
  {#each products as product}
    <div>
      <div>
        {#if product.images_display.length > 0}
          <img src="{product.images_display[0].image}" alt="{product.name}" width="287" height="190" style="object-fit: cover;" />
        {:else}
          Sem imagem
        {/if}
      </div>
      <div>
        <a href="/products/{product.id}">{product.name}</a>
      </div>
      <div>
        R$ {product.price.replace('.', ',')}
      </div>
      {#if product.owner_display.address} 
      <div>{product.owner_display.address.city}, {product.owner_display.address.district}</div>
      {/if}
    </div>
  {/each}
</div>
<h3>Olá {$session.user.name}</h3>