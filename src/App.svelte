<script>
	import { onMount } from 'svelte';
	import webUtil from './modules/webUtilities.js';
	import Logo from './components/Logo.svelte';
  import SetToggle from './components/SetToggle.svelte';
	import FilterForm from './components/FilterForm.svelte';
	import CardDisplay from './components/CardDisplay.svelte';

	const baseurl = 'https://hslookup.herokuapp.com/';
	// const baseurl = 'http://localhost:5000/'; // for testing locally

	// Default query values
	let region = 'us';
	let metadataQueryFields = {
		locale: 'en_US',
	};
	let cardDataQueryFields = {
		locale: 'en_US',
		set: 'standard',
	};

	let metadata;
	let cardData;
	let filteredCards;
	$: console.log(filteredCards);

	onMount(async () => {
		await getMetadata();
		await getCardData();
	});

	async function getMetadata() {
		metadata = 'loading';
		metadata = await fetch(`${baseurl}${region}/metadata?${webUtil.queryFieldsToString(metadataQueryFields)}`)
		.then((response) => response.json())
		.catch((error) => {
			metadata = undefined;
			console.error(error);
			return;
		});
	}

	async function getCardData() {
		cardData = 'loading';
		cardData = await fetch(`${baseurl}${region}/cards?${webUtil.queryFieldsToString(cardDataQueryFields)}`)
		.then((response) => response.json())
		.catch((error) => {
			cardData = undefined;
			console.error(error);
			return;
		});
	}
</script>



<Logo />

{#if metadata}
<SetToggle 
	bind:set={cardDataQueryFields['set']}
/>
<FilterForm
	bind:filteredCards={filteredCards}
	{metadata}
	{cardData}
/>
{/if}

<div style='height: 10px'/>

{#if filteredCards}
	<CardDisplay
		cards={filteredCards}
	/>
{/if}


