<script>
  import _ from 'lodash';
  import SetFilter from '../filterform_components/SetFilter.svelte';
  import ClassFilter from '../filterform_components/ClassFilter.svelte';
  import RarityFilter from '../filterform_components/RarityFilter.svelte';
  import CardTypeFilter from '../filterform_components/CardTypeFilter.svelte';
  import MinionTypeFilter from '../filterform_components/MinionTypeFilter.svelte';
  import NumericFilter from '../filterform_components/NumericFilter.svelte';
	import LookupButton from './LookupButton.svelte';

  export let metadata;
  export let cardData;
  $: cardData, filter();
  export let filteredCards;

  let filters = {};

  function filter() {
    if (!metadata || !cardData || metadata === 'loading' || cardData === 'loading') return;

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
    background-color: hsl(0, 0%, 10%);
    border-bottom: 4px solid hsla(0, 0%, 0%, 0.2);
  }
</style>

<div id='container'>
  {#if !metadata}
    <p>Could not fetch metadata. Please check your internet connection.</p>
  {:else if metadata === 'loading'}
    <p>Loading metadata...</p>
  {:else}
    <SetFilter 
      bind:this={filters['setId']}
      sets={metadata.sets}
      setGroups={metadata.setGroups}
    />
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
    <NumericFilter
      bind:this={filters['numeric']}
    />
    <LookupButton onClick={filter} text={'Look Up'}/>
  {/if}
</div>