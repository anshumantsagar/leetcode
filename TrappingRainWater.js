const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const trappingRainWater = (heights) => {
  // const lefts = [];
  // const rights = [];
  // heights.forEach((each, i) => {
  //   if (i === 0) {
  //     lefts.push(each);
  //   } else {
  //     if (lefts[i - 1] < each) {
  //       lefts.push(each);
  //     } else {
  //       lefts.push(lefts[i - 1]);
  //     }
  //   }
  // });
  // [...heights].reverse().forEach((each, i) => {
  //   if (i === 0) {
  //     rights.push(each);
  //   } else {
  //     if (rights[i - 1] < each) {
  //       rights.push(each);
  //     } else {
  //       rights.push(rights[i - 1]);
  //     }
  //   }
  // });
  // rights.reverse()
  // const result = heights.reduce((acc, each, i) => {
  //   console.log({ i, acc });
  //   if (i === 0 || i === heights.length - 1) {
  //     return acc;
  //   }
  //   return acc + (Math.min(lefts[i], rights[i]) - each);
  // }, 0);
  // return result
  let result = 0,
    left = 0,
    right = heights.length - 1,
    maxLeft = heights[left],
    maxRight = heights[right];
  while (left < right) {
    if (maxLeft <= maxRight) {
      left += 1;
      maxLeft = Math.max(maxLeft, heights[left]);
      const waterTrapped = maxLeft - heights[left];
      if (waterTrapped > 0) {
        result += waterTrapped;
      }
    } else {
      right -= 1;
      maxRight = Math.max(maxRight, heights[right]);
      const waterTrapped = maxRight - heights[right];
      if (waterTrapped > 0) {
        result += waterTrapped;
      }
    }
  }
  return result;
};
// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trappingRainWater(height));
