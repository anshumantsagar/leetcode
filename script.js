const nums = [2, 7, 11, 15];
const target = 9;

const findTwoSum = (nums, target) => {
  const numsMap = nums.reduce((acc, curr, index) => {
    acc[curr] = index;
    return acc;
  }, {});
  let result;
  nums.some((num, index) => {
    const goal = target - num;
    if (numsMap[goal] && numsMap[goal] !== index) {
      result = [numsMap[goal], index];
      return true;
    }
    result = []
    return false;
  });
  return result;
};
