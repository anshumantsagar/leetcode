const matrix = [
    [-8, -7, -5, -3, -3, -1, 1],
    [2, 2, 2, 3, 3, 5, 7],
    [8, 9, 11, 11, 13, 15, 17],
    [18, 18, 18, 20, 20, 20, 21],
    [23, 24, 26, 26, 26, 27, 27],
    [28, 29, 29, 30, 32, 32, 34],
  ],
  target = -5;

const searchA2DMatrix = function (matrix, target) {
  let indexContainsTarget = -1;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === target) return true;
    else if (matrix[i][0] > target) {
      indexContainsTarget = i - 1;
      break;
    } else if (i === matrix.length - 1) {
      indexContainsTarget = i;
    }
  }

  if (indexContainsTarget >= 0) {
    const targetArr = matrix[indexContainsTarget];
    let left = 0,
      right = targetArr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (targetArr[mid] === target) return true;
      if (targetArr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return false;
  } else {
    return false;
  }
};
console.log(searchA2DMatrix(matrix, target));
