<script>
  import { flick } from '../utils';

  export let leftSwipingEvent;
  export let active = false;

  let swipingEvent;

  let swipeStyle = '';

  function updateStyle (event) {
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
        const perc = distance * 100 / window.screen.width;

        return `transform: translateX(${100 - perc}%); transition: none;`;
      }
    }

    return;
  }

  $: swipeStyle = updateStyle(leftSwipingEvent) || '';
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