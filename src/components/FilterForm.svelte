<script>
  import _ from 'lodash';
  import ClassFilter from '../filterform_components/ClassFilter.svelte';
  import RarityFilter from '../filterform_components/RarityFilter.svelte';
  import CardTypeFilter from '../filterform_components/CardTypeFilter.svelte';
  import MinionTypeFilter from '../filterform_components/MinionTypeFilter.svelte';
	import LookupButton from './LookupButton.svelte';

  export let metadata;
  export let cardData;
  export let filteredCards = [];

  let filters = {};

  function filter() {
    if (!cardData) return;
    let newFilteredCards = cardData.cards;
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        newFilteredCards = filters[key].filter(newFilteredCards);
      }
    });
    filteredCards = newFilteredCards;
  }
</script>

<style>
  #container {
    padding: 18px;
  }
</style>

<div id='container'>
  {#if !metadata}
    <p>Could not fetch metadata. Please check your internet connection.</p>
  {:else if metadata === 'loading'}
    <p>Loading metadata...</p>
  {:else}
    <ClassFilter
      bind:this={filters['classIds']}
      classes={metadata.classes}
    />
    <RarityFilter
      bind:this={filters['rarityId']}
      rarities={metadata.rarities}
    />
    <CardTypeFilter 
      bind:this={filters['cardTypeId']}
      cardTypes={metadata.types}
    />
    <MinionTypeFilter 
      bind:this={filters['minionTypeId']}
      minionTypes={metadata.minionTypes}
    />
    <LookupButton onClick={filter} text={'Look Up'}/>
  {/if}
</div>