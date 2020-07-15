import SwipeListener from 'swipe-listener';

function calculateHorizontalSwipeVelocity ([ startEvent, endEvent ]) {
  const startTime = startEvent.timeStamp;
  const endTime = endEvent.timeStamp;
  const time = endTime - startTime;

  const x = endEvent.detail.x;
  const [ startX, endX ] = x;
  const distance = Math.abs(startX - endX);
  const velocity = distance / time;

  const target = event.target;
  const percentageWidth = distance / target.offsetWidth;

  return {
    velocity,
    percentageWidth,
    distance,
    time,
  };
}

/**
 * A `flick` action for Svelte
 * @param {Element} node 
 * @param {Object} options 
 *  @prop {direction} string Horizontal direction to detect flick on
 */
export function flick(node, options) {
  const listener = SwipeListener(node);

  let swipeEventsForVelocity = [];

  const eventHandlers = {
    swipe: (event) => {
      const firstEvent = swipeEventsForVelocity[0];

      swipeEventsForVelocity = [];

      const swipedInDirection = event.detail.directions[options.direction];

      if (!swipedInDirection) {
        return;
      }

      const { velocity, percentageWidth } = calculateHorizontalSwipeVelocity([
        firstEvent,
        event,
      ]);

      if (velocity > 0.1 || percentageWidth > 0.5) {
        const flickEvent = new CustomEvent('flick', {
          detail: { velocity, percentageWidth },
        });

        node.dispatchEvent(flickEvent);
      }
    },

    swiping: (event) => {
      if (!swipeEventsForVelocity[0]) {
        swipeEventsForVelocity = [event];
      }
    },

    swipecancel: (event) => {
      swipeEventsForVelocity = [];
    },
  };

  Object.keys(eventHandlers).forEach((event) => {
    node.addEventListener(event, eventHandlers[event]);
  });

  return {
    destroy() {
      listener.off();

      Object.keys(eventHandlers).forEach((event) => {
        node.removeEventListener(event, eventHandlers[event]);
      });
    },
  };
}