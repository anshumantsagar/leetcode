// const numbers = [2, 7, 11, 15],
//   target = 9;
const numbers = [0, 0, 3, 4],
  target = 0;

const twoSum = (nums, target) => {
  //   let result;
  //   for (i = 0; i < nums.length; i++) {
  //     for (j = 0; j < nums.length; j++) {
  //       const sum = nums[i] + nums[j];
  //       if (i !== j && target === sum) {
  //         result = [i + 1, j + 1];
  //       }
  //     }
  //   }
  //   return result.sort((a, b) => a - b);
  // with two pointers
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (target === sum) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};

console.log(twoSum(numbers, target));
