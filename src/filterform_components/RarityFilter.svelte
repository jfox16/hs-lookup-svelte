<script>
  import { onMount } from 'svelte';
  import MyDropdown from './MyDropdown.svelte';

  export let rarities;
  let items = [];
  let selectedRarityId;

  onMount(async () => {
    let newItems = [];
    newItems.push({
      value: '*',
      label: 'All Rarities',
    })
    rarities.forEach((rarity) => {
      newItems.push({
        value: rarity.id,
        label: rarity.name
      })
    });

    items = newItems;
  });

  export function filter(cards) {

    if (!selectedRarityId || selectedRarityId === '*') return cards;

    const filteredCards = [];

    cards.forEach((card) => {
      if (card.rarityId === selectedRarityId) {
        filteredCards.push(card);
      }
    });

    return filteredCards;
  }
</script>

<MyDropdown 
  title='RARITY'
  items={items}
  bind:value={selectedRarityId}
/>
