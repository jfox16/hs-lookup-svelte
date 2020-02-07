<script>
  import { onMount } from 'svelte';
  import MyDropdown from './MyDropdown.svelte';

  export let classes;
  let items = [];
  let selectedClassId;

  onMount(async () => {
    let newItems = [];
    newItems.push({
      value: '*',
      label: 'All Classes',
    })
    classes.forEach((_class) => {
      if (_class.slug !== 'all') {
        newItems.push({
          value: _class.id,
          label: _class.name
        })
      }
    });

    items = newItems;
  });

  export function filter(cards) {

    if (!selectedClassId || selectedClassId === '*') return cards;

    const filteredCards = [];

    cards.forEach((card) => {
      if (card.classId === selectedClassId) {
        filteredCards.push(card);
      }
      else if (card.multiClassIds) {
        for (let i = 0; i < card.multiClassIds.length; i++) {
          if (card.multiClassIds[i] === selectedClassId) {
            filteredCards.push(card);
            break;
          }
        }
      }
    });

    return filteredCards;
  }
</script>

<MyDropdown 
  title='CLASS'
  items={items}
  bind:value={selectedClassId}
/>
