// const nums = [3,1,1,2,2,1]
const nums = [4, 1, -1, 2, -1, 2, 3];
const k = 2;

const kMostFrequent = (nums, k) => {
  const frequencyMap = new Map();
  nums.forEach((num) => {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  });
  const sortedEntries = Array.from(frequencyMap.entries()).sort((a, b) => b[1] - a[1]);
  return sortedEntries.slice(0,k).map(entry => entry[0])
};

console.log(kMostFrequent(nums, k));
