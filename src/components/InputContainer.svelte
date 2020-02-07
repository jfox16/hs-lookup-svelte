<script>
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
      <slot />
    </div>
  {/if}
</div>

