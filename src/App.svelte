<script>
	import Channels from './screens/Channels.svelte';
	import Messages from './screens/Messages.svelte';

	let visible = 'channels'; // Currently visible screen
	let channelsSwipingEvent; // `swiping` event on the channels screen
	let messagesSwipingEvent; // `swiping` event on the messages screen

	// When user `flick`s on channels screen, switch to messages screen
	function handleChannelsFlick (event) {
		visible = 'messages';
	}

	// When user `flick`s on messages screen, switch to channels screen
	function handleMessagesFlick (event) {
		visible = 'channels';
	}
</script>

<Channels
	{channelsSwipingEvent}
	{messagesSwipingEvent}
	
	active={visible === 'channels'}

	on:selectchannel={() => (visible = 'messages')}
	on:swiperelease={() => (channelsSwipingEvent = null)}
	on:swiping={event => (channelsSwipingEvent = event)}
	on:flick={handleChannelsFlick}
/>

<Messages
	{channelsSwipingEvent}
	{messagesSwipingEvent}

	active={visible === 'messages'}

	on:swiperelease={() => (messagesSwipingEvent = null)}
	on:swiping={event => (messagesSwipingEvent = event)}
	on:flick={handleMessagesFlick}
/>