<script>
  export let swipingEvent;
  export let active = false;

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

  $: swipeStyle = updateStyle(swipingEvent) || '';
</script>

<style>
  .inactive {
    transform: translateX(100%);
  }
</style>

<div class="screen" class:inactive={!active} style={swipeStyle}>
  <h3>Messages</h3>
</div>