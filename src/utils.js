import SwipeListener from 'swipe-listener';

/**
 * Calculate more details from the swipe
 * @param {Array<Events>} events
 * 
 * @returns {Object} details
 *  @prop {number} velocity Average velocity of the swipe
 *  @prop {number} percentageWidth Percentage width of swipe on the target element
 */
function calculateDetailsFromSwipe ([ startEvent, endEvent ]) {
  // Calculate time
  const startTime = startEvent.timeStamp;
  const endTime = endEvent.timeStamp;
  const time = endTime - startTime;

  // Calculate distance
  const x = endEvent.detail.x;
  const [ startX, endX ] = x;
  const distance = Math.abs(startX - endX);

  // Calculate velocity
  const velocity = distance / time;

  // Calculate percentageWidth
  const target = event.target;
  const percentageWidth = distance / target.offsetWidth;

  return {
    velocity,
    percentageWidth,
  };
}

/**
 * A `flick` action for Svelte
 * @param {Element} node 
 * @param {Object} options 
 *  @prop {direction} string Horizontal direction to detect flick on
 */
export function flick(node, options) {
  // Start listening for swipes on the `node`
  const listener = SwipeListener(node);

  let swipeEventsForVelocity = [];

  const eventHandlers = {
    swipe: (event) => {
      // Swipe is now complete

      // Get the event that was fired when swiping started
      const firstEvent = swipeEventsForVelocity[0];

      // Reset the list of events
      swipeEventsForVelocity = [];

      // Get the directions of swipe
      const swipedInDirection = event.detail.directions[options.direction];

      if (!swipedInDirection) {
        return;
      }

      // Calculate the velocity and the width of the swipe
      const { velocity, percentageWidth } = calculateDetailsFromSwipe([
        firstEvent,
        event,
      ]);

      // Arbitrary thresholds for detemining whether or not a swipe is a "flick"
      // Change to whatever suits for your UX
      if (velocity > 0.1 || percentageWidth > 0.5) {
        // Emit a "flick" event on `node`
        const flickEvent = new CustomEvent('flick', {
          detail: { velocity, percentageWidth },
        });

        node.dispatchEvent(flickEvent);
      }
    },

    swiping: (event) => {
      // Swiping in progress
      // Set this as the first event in the list of events used for calculating velocity, if none exist
      if (swipeEventsForVelocity.length === 0) {
        swipeEventsForVelocity = [event];
      }
    },

    swipecancel: (event) => {
      // Swiping was cancelled
      // Reset the list of events used for calculating velocity
      swipeEventsForVelocity = [];
    },
  };

  // Attach all event handlers to `node`
  Object.keys(eventHandlers).forEach((event) => {
    node.addEventListener(event, eventHandlers[event]);
  });

  return {
    destroy() {
      // Stop listening for swipes
      listener.off();

      // Remove all event listeners
      Object.keys(eventHandlers).forEach((event) => {
        node.removeEventListener(event, eventHandlers[event]);
      });
    },
  };
}