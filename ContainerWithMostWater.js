const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const containerWithMostWater = (height) => {
  let left = 0,
    right = height.length - 1,
    result = 0;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    if (result < area) {
      result = area;
    }
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return result;
};

console.log(containerWithMostWater(height));
