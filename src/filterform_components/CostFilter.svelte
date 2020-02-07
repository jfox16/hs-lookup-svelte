<script>
  import NumericFilter from './NumericFilter.svelte';

  export function filter(cards) {
    let filteredCards = [];

    cards.forEach((card) => {
      if (selectedClassIds[card.classId]) {
        filteredCards.push(card);
      }
      else if (card.multiClassIds) {
        for (let i = 0; i < card.multiClassIds.length; i++) {
          if (selectedClassIds[card.multiClassIds[i]]) {
            filteredCards.push(card);
            break;
          }
        }
      }
    });

    return filteredCards;
  }
</script>

<h3>CLASSES</h3>
<MultiOptionFilter
  bind:this={multiOptionFilter}
  options={options}
/>