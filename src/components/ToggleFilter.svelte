<script>
  export let trueObject;
  export let falseObject;
  export let value;
</script>

<style>
  label {
    display: inline;
  }
</style>

<label>
  <input type=radio bind:group={value} value={'standard'} /> {trueObject.name}
</label>
<label>
  <input type=radio bind:group={value} value={'wild'} /> {falseObject.name}
</label>

