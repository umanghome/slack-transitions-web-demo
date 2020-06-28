<script>
	import Channels from './screens/Channels.svelte';
	import Messages from './screens/Messages.svelte';

	let visible = 'channels';

	let swipingEvent;
</script>

<Channels bind:swipingEvent active={visible === 'channels'} />
<Messages {swipingEvent} active={visible === 'messages'} />