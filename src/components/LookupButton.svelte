<script>
  export let onClick;
	export let text;
</script>

<style>
  
	button {
    margin: 0;
		padding: 0.7em;
		width: 100%;
		background-color: hsl(30, 90%, 50%);
		border-top: 4px solid hsla(0, 0%, 100%, 0.3);
		border-left: 4px solid hsla(0, 0%, 0%, 0.1);
		border-right: 4px solid hsla(0, 0%, 100%, 0.1);
		border-bottom: 4px solid hsla(0, 0%, 0%, 0.3);
		color: white;
		border-radius: 6px;
	}

	button:hover {
		background-color: hsl(30, 100%, 55%);
		cursor: pointer;
	}

	button:active {
		background-color: hsl(30, 100%, 45%);
	}
</style>


<div class='innerBevel' style='display: block; border-radius: 10px;'>
  <button style='border-radius: 6px' on:click={onClick}>{text}</button>
</div>