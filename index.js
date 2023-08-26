// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  return Math.abs(distance - 42);
}

function distanceFromHqInFeet(dist) {
  const numberOfBlocks = Math.abs(dist - 42);

  return 264 * numberOfBlocks;
}

function distanceTravelledInFeet(blk1, blk2) {
  const totalBlocks = Math.abs(blk1 - blk2);
  return 264 * totalBlocks;
}
function calculatesFarePrice(start, destination) {
  const totalFeet = Math.abs(destination - start) * 264;
  if (totalFeet < 400) {
    return 0;
  } else if (totalFeet > 400 && totalFeet <= 2000) {
    return ((totalFeet - 400) * 2) / 100;
  } else if (totalFeet > 2000 && totalFeet <= 2500) {
    return 25;
  } else if (totalFeet > 2500) {
    return "cannot travel that far";
  }
}
