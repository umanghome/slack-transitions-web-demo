<script>
	import Channels from './screens/Channels.svelte';
	import Messages from './screens/Messages.svelte';

	let visible = 'channels';
	let leftSwipingEvent;

	function handleChannelsFlick (event) {
		visible = 'messages';
	}
</script>

<Channels
	active={visible === 'channels'}

	on:swiperelease={() => (leftSwipingEvent = null)}
	on:swiping={event => (leftSwipingEvent = event)}
	on:flick={handleChannelsFlick}
/>

<Messages
	{leftSwipingEvent}
	active={visible === 'messages'}
/>