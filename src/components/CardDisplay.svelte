<script>
  import {LazyLoadContainer, LazyLoad} from 'svelte-lazyload';
  export let cards;
</script>

<style>
  #cardImgContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5px;
  }
  .cardImgDiv {
    width: 100px;
    flex-grow: 1;
  }
  .cardImgDiv img {
    width: 100%;
  }
</style>

<div>
  {#if !cards}
    <p>Could not fetch cards. Please check your internet connection.</p>
  {:else if cards === 'loading'}
    <p>Loading cards...</p>
  {:else if cards.length === 0}
    <p>No cards found. Try a different query!</p>
  {:else}
    <p>{cards.length} Cards</p>
    <LazyLoadContainer>
    <div id='cardImgContainer'>
      {#each cards as card}
        <div class='cardImgDiv'>
          <LazyLoad id={card.id}>
            <img src={card.image} alt={card.name} key={card.id}/>
          </LazyLoad>
        </div>
      {/each}
    </div>
    </LazyLoadContainer>
  {/if}
</div>