<script>
  import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte'

  export let title = '';
  export let items = [];
  export let value = undefined;
  $: defaultSelected = (value === '*');
</script>

<style>
  #container {
    margin-bottom: 18px;
  }

  #title {
    text-transform: uppercase;
    font-size: 0.8em;
    letter-spacing: 0.05em;
    margin: 0;
    margin-bottom: 0.8em;
  }

  #selectContainer {
    background-color: hsl(0, 0%, 10%);
    border: 1px solid hsl(0, 0%, 20%);
    border-radius: 0.2em;
    width: 100%
  }

  #selectContainer select {
    width: 100%;
    margin: 0;
    border: none;
    box-shadow: none;
    background: transparent;
    background-image: none;
    -webkit-appearance: none;
    line-height: 1.5em;
    color: hsl(0, 0%, 90%);
  }

  #selectContainer select option {
    border: none;
    background-color: hsl(0, 0%, 10%);
    scrollbar-color: dark;
    color: hsl(0, 0%, 90%);
  }

  #arrowPositioner {
    position: relative;
    height: 0;
    width: 0;
    float: right;
    right: 25px;
    top: 10px;
  }

  #arrowDiv {
    display: inline-block;
    height: 1em;
    width: 1em;
  }
</style>

<div id='container'>
  <p id='title'>{title}</p>
  {#if items && items.length > 0}
  <div id='selectContainer' style={(defaultSelected) ? '' : 'border-color: hsl(204, 80%, 63%)'}>
    <select bind:value={value} style={(defaultSelected) ? 'color: hsl(0, 0%, 40%)' : ''}>
      {#each items as item}
      <option value={item.value}>
        {item.label}
      </option>
      {/each}
    </select>
    <div id='arrowPositioner'>
      <div id='arrowDiv'>
        <FaChevronDown />
      </div>
    </div>
  </div>
  {/if}
</div>
