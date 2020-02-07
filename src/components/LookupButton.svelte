<script>
  export let onClick;
  export let text;
</script>

<style>
  #inset {
    display: block;
		margin: auto;

		border-top: 0.15em solid hsla(0, 0%, 0%, 0.3);
		border-left: 0.15em solid hsla(0, 0%, 100%, 0.05);
		border-right: 0.15em solid hsla(0, 0%, 100%, 0.05);
		border-bottom: 0.15em solid hsla(0, 0%, 100%, 0.1);
		border-radius: 0.7em;
  }
  
	button {
    margin: 0;
		padding: 0.7em;
		width: 100%;

		background-color: hsl(30, 90%, 50%);
		color: white;
		
		border-top: 0.2em solid hsla(0, 0%, 100%, 0.3);
		border-left: 0.2em solid hsla(0, 0%, 0%, 0.1);
		border-right: 0.2em solid hsla(0, 0%, 0%, 0.1);
		border-bottom: 0.2em solid hsla(0, 0%, 0%, 0.3);
		border-radius: 0.5em;

    transition: box-shadow 0.1s;
	}

	button:hover {
		background-color: hsl(30, 100%, 55%);
    /* box-shadow: 0 0 3px 1px hsl(0, 0%, 100%); */
		cursor: pointer;
	}

	button:active {
		background-color: hsl(30, 100%, 45%);
	}
</style>


<div id='inset'>
  <button on:click={onClick}>{text}</button>
</div>