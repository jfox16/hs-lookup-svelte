<script>
  import {onMount} from 'svelte';
  import ToggleFilter from './ToggleFilter.svelte';

  export let sets;
  export let setGroups;

  let selectedSetSlug = 'standard';
  let cardSets = {
    standard: {},
    wild: {}
  }
  let cardSetIds = {
    standard: {},
    wild: {}
  }

  onMount(() => {
    if (!sets || !setGroups) return;
    
    setGroups.forEach((setGroup) => {
      if (setGroup.slug === 'standard') {
        setGroup.cardSets.forEach((cardSet) => {
          cardSets.standard[cardSet] = true;
        });
      }
      else if (setGroup.slug === 'wild') {
        setGroup.cardSets.forEach((cardSet) => {
          cardSets.wild[cardSet] = true;
        });
      }
    });

    sets.forEach((set) => {
      if (cardSets.standard[set.slug]) {
        cardSetIds.standard[set.id] = true;
      }
      if (cardSets.wild[set.slug]) {
        cardSetIds.wild[set.id] = true;
      }
    })
  });

  export function filter(cards) {
    if (!selectedSetSlug) return cards;

    let filteredCards = [];

    cards.forEach((card) => {
      if (cardSetIds[selectedSetSlug][card.cardSetId]) {
        filteredCards.push(card);
      }
    });

    return filteredCards;
  }
</script>

<style>
  #container {
    display: flex;
    direction: row;
    margin-bottom: 18px;
  }

  label {
    display: inline;
  }
</style>

<div id='container'>
  <label>
    <input type=radio bind:group={selectedSetSlug} value={'standard'} /> Standard
  </label>
  <div style='width: 10px' />
  <label>
    <input type=radio bind:group={selectedSetSlug} value={'wild'} /> Wild
  </label>
</div>
