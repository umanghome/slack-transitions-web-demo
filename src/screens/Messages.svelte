<script>
  import { flick } from '../utils';

  export let leftSwipingEvent;
  export let active = false;

  let swipingEvent;

  function getSwipeStyle (current, left) {
    if (current) {
      const { detail } = current;
      const { x } = detail;

      if (!x) {
        return;
      }

      const distance = x[1] - x[0];

      if (distance < 0) {
        // Swipe is in opposite direction
        return;
      }

      const perc = distance * 100 / window.screen.width;

      return `transform: translateX(${perc}%); transition: none;`;
    } else if (left) {
      const { detail } = left;
      const { x } = detail;

      if (!x) {
        return;
      }

      const distance = x[0] - x[1];

      if (distance < 0) {
        // Swipe is in opposite direction
        return;
      }

      const perc = distance * 100 / window.screen.width;

      return `transform: translateX(${100 - perc}%); transition: none;`;
    }

    return '';
  }

  let swipeStyle = '';
  $: swipeStyle = getSwipeStyle(swipingEvent, leftSwipingEvent);
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
  on:swiperelease={() => (swipingEvent = null)}
  on:swiping={event => (swipingEvent = event)}
  >
  <h3>Messages</h3>
</div>