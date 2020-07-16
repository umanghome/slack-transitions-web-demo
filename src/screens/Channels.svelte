<script>
  import { createEventDispatcher } from 'svelte';
  import { flick } from '../utils';

  const dispatch = createEventDispatcher();

  const channels = Array(10).fill(0, 0, 10).map((_, i) => ({
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

      return {
        main: `transform: translateX(-${perc}%); transition: none;`,
        overlay: `opacity: ${(perc / 50)}; transition: none;`,
      }
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

      return {
        main: `transform: translateX(-${20 - perc}%); transition: none;`,
        overlay: `opacity: ${0.5 - (perc / 50)}; transition: none;`,
      };
    }

    return {
      main: '',
      overlay: '',
    };
  }

  const initStyles = { main: '', overlay: '' }
  let swipeStyle = initStyles;
  $: swipeStyle = getSwipeStyle(swipingEvent, rightSwipingEvent) || initStyles;
</script>

<style>
  h3 {
    font-size: 0.8rem;
  }

  .channels + .channels {
    margin-top: 2em;
  }

  .channel::first-letter {
    margin-left: 12px;
  }

  .channel.unread {
    font-weight: bold;;
  }

  .channel + .channel {
    margin-top: 0.8rem;
  }

  .inactive {
    transform: translateX(-20%);
  }

  .overlay {
    background-color: black;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;

    opacity: 0;
  }

  .inactive .overlay {
    opacity: 0.5;
  }
</style>

<div
  class="screen"
  class:inactive={!active} 
  
  style={swipeStyle.main}

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
      <div
        class="channel unread"
        on:click={() => dispatch('selectchannel')}>
        #{channel.name}
      </div>
    {/each}
  </div>
  <div class="channels">
    <h3>All channels</h3>
    {#each channels as channel}
      <div
        class="channel"
        on:click={() => dispatch('selectchannel')}>
        #{channel.name}
      </div>
    {/each}
  </div>
  <div class="overlay" style={swipeStyle.overlay}></div>
</div>