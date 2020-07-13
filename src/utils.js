export function calculateHorizontalSwipeVelocity ([ startEvent, endEvent ]) {
  const startTime = startEvent.timeStamp;
  const endTime = endEvent.timeStamp;
  const time = endTime - startTime;

  const x = endEvent.detail.x;
  const [ startX, endX ] = x;
  const distance = Math.abs(startX - endX);
  const velocity = distance / time;

  const target = event.target;
  const percentageWidth = distance / target.getBoundingClientRect().width;

  return {
    velocity,
    percentageWidth,
    distance,
    time,
  };
}