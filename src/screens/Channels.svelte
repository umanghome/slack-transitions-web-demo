<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  import { calculateHorizontalSwipeVelocity } from '../utils';
  import SwipeListener from 'swipe-listener';

  const dispatch = createEventDispatcher();

  const channels = Array(100).fill(0, 0, 100).map((_, i) => ({
    name: `channel_${i + 1}`,
    unread: i < 4
  }));

  const unread = channels.filter(channel => channel.unread);

  export let active;

  let swipingEvent;
  let screen;
  let listener;

  let swipeEventsForVelocity = [];

  onMount(() => {
    listener = SwipeListener(screen);
  });

  onDestroy(() => {
    listener.off();
  });

  function clearEventsStoredForVelocty (event) {
    swipeEventsForVelocity = [];
  }

  function swipeHandler (event) {
    const swipedLeft = event.detail.directions.left;
    const firstEvent = swipeEventsForVelocity[0];

    clearEventsStoredForVelocty();

    if (!swipedLeft) {
      return;
    }

    const { velocity, percentageWidth } = calculateHorizontalSwipeVelocity([ firstEvent, event]);

    if (velocity > 0.1 || percentageWidth > 0.5) {
      dispatch('flick', {
        velocity,
        percentageWidth
      });
    }
  }

  function swipingHandler (event) {
    swipingEvent = event;

    if (!swipeEventsForVelocity[0]) {
      swipeEventsForVelocity = [event]
    };
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

        return `transform: translateX(-${perc}%); filter: brightness(${1 - (perc / 50)}); transition: none;`;
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

  .inactive {
    transform: translateX(-20%);
    filter: brightness(0.5);
  }
</style>

<div
  class="screen"
  class:inactive={!active} 
  
  style={swipeStyle}
  bind:this={screen}

  on:swiping
  on:swiperelease
  on:swiperelease={() => (swipingEvent = null)}
  on:swipe={swipeHandler} 
  on:swiping={swipingHandler}
  on:swipecancel={clearEventsStoredForVelocty}
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