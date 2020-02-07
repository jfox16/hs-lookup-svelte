
<script>
  import ToggleFilter from './ToggleFilter.svelte';
  export let set = 'standard';


</script>

<style>
  #container {
    margin-bottom: 18px;
  }

  label {
    display: inline;
  }
</style>

<div id='container'>
  <label>
    <input type=radio bind:group={set} value={'standard'} /> Standard
  </label>
  <div style='width: 10px' />
  <label>
    <input type=radio bind:group={set} value={'wild'} /> Wild
  </label>
</div>
