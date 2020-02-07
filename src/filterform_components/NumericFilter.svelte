<script>
  let selectedManaCost;
  let selectedHealth;
  let selectedAttack;

  export function filter(cards) {
    let filteredCards = cards;

    if (selectedManaCost) {
      filteredCards = cards.filter(card => (card.manaCost == selectedManaCost));
    }

    if (selectedHealth && Number.isInteger(selectedHealth)) {
      filteredCards = cards.filter(card => (card.health == selectedHealth));
    }

    if (selectedAttack && Number.isInteger(selectedAttack)) {
      filteredCards = cards.filter(card => (card.attack == selectedAttack));
    }

    return filteredCards;
  }
</script>

<style>
  #container {
    display: flex;
    direction: row;
    margin-bottom: 18px;
  }

  .inputDiv {
    flex-grow: 1;
  }

  input {
    margin: 0;
    width: 100%;
    background-color: hsl(0, 0%, 15%);
    border: 1px solid hsl(0, 0%, 30%);
    border-radius: 0;
    line-height: 1.5em;
    color: hsl(0, 0%, 90%);
  }
  
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance:textfield;
  }

  .label {
    text-transform: uppercase;
    font-size: 0.8em;
    letter-spacing: 0.05em;
    margin: 0;
    margin-bottom: 0.8em;
  }
</style>

<div id='container'>
  <div class='inputDiv'>
    <p class='label'>MANA</p>
    <input 
      type='number' 
      placeholder='Any'
      bind:value={selectedManaCost} 
      style='border-radius: 3px 0 0 3px; border-right: none;'
    />
  </div>
  <div class='inputDiv'>
    <p class='label'>HEALTH</p>
    <input 
      type='number' 
      placeholder='Any'
      bind:value={selectedHealth}
    />
  </div>
  <div class='inputDiv'>
    <p class='label'>ATTACK</p>
    <input
      type='number'
      placeholder='Any'
      bind:value={selectedAttack} 
      style='border-radius: 0 3px 3px 0; border-left: none;'
    />
  </div>
</div>