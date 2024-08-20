const numns = [-1, 0, 1, 2, -1, -4];

const threeSum = (nums) => {
  nums.sort((a, b) => a - b); // Sort the array
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate elements
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicate elements
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++; // Move the left pointer to the right
      } else {
        right--; // Move the right pointer to the left
      }
    }
  }

  return result;
};
