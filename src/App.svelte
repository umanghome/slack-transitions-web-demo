<script>
	import Channels from './screens/Channels.svelte';
	import Messages from './screens/Messages.svelte';

	let visible = 'channels';
	let leftSwipingEvent;
	let rightSwipingEvent;

	function handleChannelsFlick (event) {
		visible = 'messages';
	}

	function handleMessagesFlick (event) {
		visible = 'channels';
	}
</script>

<Channels
	{rightSwipingEvent}
	active={visible === 'channels'}

	on:swiperelease={() => (leftSwipingEvent = null)}
	on:swiping={event => (leftSwipingEvent = event)}
	on:flick={handleChannelsFlick}
/>

<Messages
	{leftSwipingEvent}
	active={visible === 'messages'}

	on:swiperelease={() => (rightSwipingEvent = null)}
	on:swiping={event => (rightSwipingEvent = event)}
	on:flick={handleMessagesFlick}
/>