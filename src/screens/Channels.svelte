<script>
  import { onMount, onDestroy } from 'svelte';
  import SwipeListener from 'swipe-listener';

  const channels = Array(100).fill(0, 0, 100).map((_, i) => ({
    name: `channel_${i + 1}`,
    unread: i < 4
  }));

  const unread = channels.filter(channel => channel.unread);

  export let swipingEvent;

  let screen;
  let listener;

  onMount(() => {
    listener = SwipeListener(screen);
  });

  onDestroy(() => {
    listener.off();
  });

  function swipeHandler (event) {
    console.log('swipe', event);
  }

  function swipingHandler (event) {
    swipingEvent = event;
  }

  function getSwipeStyle (event) {
    if (event) {
      const { detail } = event;
      const { x } = detail;

      if (!x) {
        return;
      }

      const distance = x[0] - x[1];

      if (distance < 0) {
        return;
      } else {
        const perc = distance * 20 / window.screen.width;

        return `transform: translateX(-${perc}%); filter: brightness(${1 - (perc / 100)}); transition: none;`;
      }
    }

    return;
  }

  let swipeStyle = '';
  $: swipeStyle = getSwipeStyle(swipingEvent);
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
</style>

<div
  class="screen"
  style={swipeStyle}
  bind:this={screen}
  on:swipe={swipeHandler} 
  on:swiping={swipingHandler}
  on:swiperelease={() => (swipingEvent = null)}
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