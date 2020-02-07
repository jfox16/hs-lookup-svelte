<script>
  import { onMount } from 'svelte';
  import MyDropdown from './MyDropdown.svelte';

  export let cardTypes;
  let items = [];
  let selectedCardTypeId;

  onMount(async () => {
    let newItems = [];
    newItems.push({
      value: '*',
      label: 'All Card Types',
    })
    cardTypes.forEach((cardType) => {
      newItems.push({
        value: cardType.id,
        label: cardType.name
      })
    });

    items = newItems;
  });

  export function filter(cards) {

    if (!selectedCardTypeId || selectedCardTypeId === '*') return cards;

    const filteredCards = [];

    cards.forEach((card) => {
      if (card.cardTypeId === selectedCardTypeId) {
        filteredCards.push(card);
      }
    });

    return filteredCards;
  }
</script>

<MyDropdown 
  title='CARD TYPE'
  items={items}
  bind:value={selectedCardTypeId}
/>
