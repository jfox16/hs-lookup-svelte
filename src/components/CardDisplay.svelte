<script>
  export let cards;
</script>

<div>
  {#if !cards}
    <p>Could not fetch cards. Please check your internet connection.</p>
  {:else if cards === 'loading'}
    <p>Loading cards...</p>
  {:else if cards.length === 0}
    <p>No cards found. Try a different query!</p>
  {:else}
    {#each cards as card}
      <p>{card.name}</p>
    {/each}
  {/if}
</div>