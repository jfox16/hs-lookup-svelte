<script>
  import { onMount } from 'svelte';
  import MyDropdown from './MyDropdown.svelte';

  export let minionTypes;
  let items = [];
  let selectedMinionTypeId;

  onMount(async () => {
    const newItems = [];
    newItems.push({
      value: '*',
      label: 'All Minion Types'
    });
    minionTypes.forEach((minionType) => {
      if (minionType.slug !== 'all') {
        newItems.push({
          value: minionType.id,
          label: minionType.name,
        })
      }
    });

    items = newItems;
  });

  export function filter(cards) {

    if (!selectedMinionTypeId || selectedMinionTypeId === '*') return cards;

    const filteredCards = [];

    cards.forEach((card) => {
      if (card.minionTypeId === selectedMinionTypeId) {
        filteredCards.push(card);
      }
    });

    return filteredCards;
  }
</script>

<MyDropdown 
  title='MINION TYPE'
  items={items}
  bind:value={selectedMinionTypeId}
/>