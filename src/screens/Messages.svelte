<script>
  import { flick } from '../utils';

  export let messagesSwipingEvent; // `swiping` event on this (messages) screen
  export let channelsSwipingEvent; // `swiping` event on the channels screen
  export let active = false; // Is this the currently active screen?

  /**
   * Returns the styles to be applied
   * @param {Event} messagesSwipingEvent `swiping` event on this screen
   * @param {Event} channelsSwipingEvent `swiping` event on the channels screen
   * 
   * @returns {string|undefined} Styles for the main element
   */
  function getSwipeStyle (messagesSwipingEvent, channelsSwipingEvent) {
    if (messagesSwipingEvent) {
      // User is swiping on the Messages screen

      const { detail } = messagesSwipingEvent;
      const { x } = detail;

      if (!x) {
        return;
      }

      const distance = x[1] - x[0];

      if (distance < 0) {
        // Swipe is in opposite direction
        // We don't want to trigger anything in the UI on the Messages screen
        return;
      }

      // We'll just move the Messages screen as much to the left as the swipe distance
      const perc = distance * 100 / window.screen.width;

      // Disabling transitions because we want the repositioning to happen instantly

      return `transform: translateX(${perc}%); transition: none;`;
    } else if (channelsSwipingEvent) {
      // User is swiping on the Channels screen

      const { detail } = channelsSwipingEvent;
      const { x } = detail;

      if (!x) {
        return;
      }

      const distance = x[0] - x[1];

      if (distance < 0) {
        // Swipe is in opposite direction
        // We don't want to trigger anything in the UI on the Messages screen
        return;
      }

      // We'll move the messages screen as much into the view from the right as the swipe distance
      const perc = distance * 100 / window.screen.width;

      // Disabling transitions because we want the repositioning to happen instantly

      return `transform: translateX(${100 - perc}%); transition: none;`;
    }

    return '';
  }

  const initStyles = ''; // Initial styles for the main element

  // Styles that make the UI feel like it is being swiped on
  let swipeStyle = initStyles;

  /**
   * When `messagesSwipingEvent` or `channelsSwipingEvent` change,
   * try to calculate the new styles.
   * Fall back to `initStyles` on failure.
   */
  $: swipeStyle = getSwipeStyle(messagesSwipingEvent, channelsSwipingEvent) || initStyles;
</script>

<style>
  .inactive {
    transform: translateX(100%);
  }
</style>

<div
  class="screen"
  class:inactive={!active}
  
  style={swipeStyle}
  
  use:flick={{
    direction: 'right'
  }}

  on:flick
  on:swiping
  on:swiperelease
  >
  <h3>Messages</h3>
</div>