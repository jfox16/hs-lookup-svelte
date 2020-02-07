<script>
  export let value = true;
  export let onClick;
</script>

<style>
  div {
    display: inline-block;
    margin: 0.2em;
    padding: 0.2em 0.5em 0.3em 0.5em;
    border-radius: 1em;
  }

  div:hover {
    cursor: pointer;
  }

  #selected {
    border: 0.1em solid white;
    background-color: white;
    color: black;
  }

  #unselected {
    border: 0.1em solid #999999;
    color: #999999;
  }
</style>

<div id={(value) ? 'selected' : 'unselected'} on:click={onClick}>
  <slot></slot>
</div>