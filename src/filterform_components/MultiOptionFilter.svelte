<script>
	import { slide } from 'svelte/transition';
  import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte'

  export let title = '';
  export let description = '';
  let open = false;

  
  import { onMount } from 'svelte';
  import BubbleCheckbox from '../inputs/BubbleCheckbox.svelte';

  export let options;
  export let optionPercentages = {};

  let selectedOptions = {};

  export let selectedOptionsCount = 0;
  let allOptionsSelected = false;

  onMount(() => {
    selectedOptions = {};
    options.forEach((option) => {
      selectedOptions[option.id] = false;
    });
  });
  
  function handleCheckboxClick(id) {
    // The click event happens before the value is updated in classesToInclude, so change it manually
    selectedOptions[id] = !selectedOptions[id];
    // Increase count if value was changed to true, decrease if false
    (selectedOptions[id]) ? selectedOptionsCount++ : selectedOptionsCount--;
    // allOptionsSelected is true if all values are true, false otherwise
    allOptionsSelected = (selectedOptionsCount === options.length);
    onSelectedOptionsChange();
  }

  function handleAllboxClick() {
    let nowAllOptionsSelected = !allOptionsSelected;
    options.forEach((option) => {
      selectedOptions[option.id] = nowAllOptionsSelected;
    });
    (nowAllOptionsSelected) ? selectedOptionsCount = options.length : selectedOptionsCount = 0;
    selectedOptions = selectedOptions;
    onSelectedOptionsChange();
  }

  export function getSelectedOptions() {
    return selectedOptions;
  }

  function onSelectedOptionsChange() {
    allOptionsSelected = (options && selectedOptionsCount === options.length);

    if (allOptionsSelected) {
      description = 'All';
      return;
    }

    description = '';
    let first = true;
    options.forEach((option) => {
      if (selectedOptions[option.id]) {
        (first) ? first = false : description += ', ';
        description += option.name;
      }
    });
  }
</script>

<style>
  #container {
		border-radius: 0.5em;
  }

  #titleDiv {
    display: flex;
    align-items: center;
    padding: 0.5em;
    border-bottom: 1px solid hsl(0, 0%, 20%);
  }

  #titleDiv:hover {
    cursor: pointer;
  }

  #title {
    margin: 0;
    text-transform: uppercase;
  }

  #description {
    margin: 0;
    color: hsl(0, 0%, 50%);
  }

  #chevronDiv {
    display: inline-block;
    position: relative;
    height: 0.8em;
    top: -3px;
    transition: all 0.4s;
    color: hsl(0, 0%, 50%);
  }

  #drawer {
    border-bottom: 1px solid hsl(0, 0%, 20%);
    padding: 0.5em;
  }
</style>

{#if options}
  <div id='container'>
    <div id='titleDiv' on:click={() => open = !open}>
      <p id='title'>{title} </p>
      <div style='width: 0.3em'/>
      <div id='chevronDiv' style={(open) ? 'transform: rotate(-180deg); top: 3px' : ''}><FaChevronDown /></div>
      <div style='width: 0.8em'/>
      <p id='description'>{description}</p>
    </div>

    {#if open}
      <div id='drawer' transition:slide>
        <BubbleCheckbox value={allOptionsSelected} onClick={() => handleAllboxClick()}>
          All
        </BubbleCheckbox>
        {#each options as option}
          <BubbleCheckbox value={selectedOptions[option.id]} onClick={() => handleCheckboxClick(option.id)}>
            {option.name} {(optionPercentages[option.id]) ? optionPercentages[option.id] + '%' : ''}
          </BubbleCheckbox>
        {/each}
      </div>
    {/if}
  </div>
{/if}