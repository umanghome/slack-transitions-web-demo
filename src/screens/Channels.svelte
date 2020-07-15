<script>
  import { flick } from '../utils';

  const channels = Array(100).fill(0, 0, 100).map((_, i) => ({
    name: `channel_${i + 1}`,
    unread: i < 4
  }));

  const unread = channels.filter(channel => channel.unread);

  export let rightSwipingEvent;
  export let active;

  let swipingEvent;

  function getSwipeStyle (current, right) {
    if (current) {
      const { detail } = current;
      const { x } = detail;

      if (!x) {
        return;
      }

      const distance = x[0] - x[1];

      if (distance < 0) {
        // Swipe is in opposite direction
        return;
      }

      const perc = distance * 20 / window.screen.width;

      return `transform: translateX(-${perc}%); filter: brightness(${1 - (perc / 50)}); transition: none;`;
    } else if (right) {
      const { detail } = right;
      const { x } = detail;

      if (!x) {
        return;
      }

      const distance = x[1] - x[0];

      if (distance < 0) {
        // Swipe is in opposite direction
        return;
      }
      
      const perc = distance * 20 / window.screen.width;

      return `transform: translateX(-${20 - perc}%); filter: brightness(${0.5 + (perc / 50)}); transition: none;`;
    }

    return '';
  }

  let swipeStyle = '';
  $: swipeStyle = getSwipeStyle(swipingEvent, rightSwipingEvent);
</script>

<style>
  h3 {
    font-size: 0.8rem;
  }

  .channels + .channels {
    margin-top: 2em;
  }

  .channel + .channel {
    margin-top: 0.6rem;
  }

  .inactive {
    transform: translateX(-20%);
    filter: brightness(0.5);
  }
</style>

<div
  class="screen"
  class:inactive={!active} 
  
  style={swipeStyle}

  use:flick={{
    direction: 'left'
  }}

  on:flick
  on:swiping
  on:swiperelease
  on:swiperelease={() => (swipingEvent = null)}
  on:swiping={event => (swipingEvent = event)}
>
  <div class="channels">
    <h3>Unread channels</h3>
    {#each unread as channel}
      <div class="channel unread">#{channel.name}</div>
    {/each}
  </div>
  <div class="channels">
    <h3>All channels</h3>
    {#each channels as channel}
      <div class="channel">#{channel.name}</div>
    {/each}
  </div>
</div>