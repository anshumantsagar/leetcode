// const nums = [100, 4, 200, 1, 3, 2];
const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

const longestConsicutiveSequence = (nums) => {
  // Convert the array to a set for O(1) lookups
  const numSet = new Set(nums);
  let maxLength = 0;

  // Iterate through the array
  for (let num of numSet) {
    // Only check if 'num' is the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      // Count the length of the consecutive sequence
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      // Update the maximum length found
      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
};

console.log(longestConsicutiveSequence(nums));
