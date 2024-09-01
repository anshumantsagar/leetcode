const nums = [-1, 0, 3, 5, 9, 12],
  target = 9;

const findIndex = (arr, target) => {
  let left = 0,
    right = arr.length - 1,
    mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  while (left <= right) {
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return -1;
};

console.log(findIndex(nums, target));
