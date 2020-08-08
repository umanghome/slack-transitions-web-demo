<script>
  import { createEventDispatcher } from 'svelte';
  import { flick } from '../utils';

  const dispatch = createEventDispatcher();

  // Generate a list of channels for the UI
  const channels = Array(10).fill(0, 0, 10).map((_, i) => ({
    name: `channel_${i + 1}`,
    unread: i < 4
  }));

  // Get the unread channels
  const unread = channels.filter(channel => channel.unread);

  export let channelsSwipingEvent; // `swiping` event on this (channels) screen
  export let messagesSwipingEvent; // `swiping` event on the messages screen
  export let active = false; // Is this the currently active screen?

  /**
   * Returns the styles to be applied
   * @param {Event} channelsSwipingEvent `swiping` event on this screen
   * @param {Event} messagesSwipingEvent `swiping` event on the messages screen
   * 
   * @returns {Object|undefined}
   *  @prop {string} main Styles for the main element
   *  @prop {string} overlay Styles for the overlay
   */
  function getSwipeStyle (channelsSwipingEvent, messagesSwipingEvent) {
    if (channelsSwipingEvent) {
      // User is swiping on the Channels screen
      
      const { detail } = channelsSwipingEvent;
      const { x } = detail;

      if (!x) {
        return;
      }

      const distance = x[0] - x[1];

      if (distance < 0) {
        // Swipe is in opposite direction
        // We don't want to trigger anything in the UI on the Channels screen
        return;
      }

      // Figure out how much do we need to push the screen to left
      // Also figure out the opacity
      const perc = distance * 20 / window.screen.width;

      // Disabling transitions because we want the repositioning to happen instantly

      return {
        main: `transform: translateX(-${perc}%); transition: none;`,
        overlay: `opacity: ${(perc / 50)}; transition: none;`,
      }
    } else if (messagesSwipingEvent) {
      // User is swiping on the Messages screen

      const { detail } = messagesSwipingEvent;
      const { x } = detail;

      if (!x) {
        return;
      }

      const distance = x[1] - x[0];

      if (distance < 0) {
        // Swipe is in opposite direction
        // We don't want to trigger anything in the UI on the Channels screen
        return;
      }

      // Figure out how much do we need to push the screen to right
      // Also figure out the opacity
      const perc = distance * 20 / window.screen.width;

      // Disabling transitions because we want the repositioning to happen instantly

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

  const initStyles = { main: '', overlay: '' }; // Initial styles for the main element and overlay

  // Styles that make the UI feel like it is being swiped on
  let swipeStyle = initStyles;
  
  /**
   * When `channelsSwipingEvent` or `messagesSwipingEvent` change,
   * try to calculate the new styles.
   * Fall back to `initStyles` on failure.
   */
  $: swipeStyle = getSwipeStyle(channelsSwipingEvent, messagesSwipingEvent) || initStyles;
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