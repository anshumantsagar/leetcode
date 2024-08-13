const productOfAllExceptSelf = (nums) => {
  const prefix = [];
  const postfix = [];
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefix[i] = nums[i];
    } else {
      prefix[i] = prefix[i - 1] * nums[i];
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === prefix.length - 1) {
      postfix[i] = nums[i];
    } else {
      postfix[i] = postfix[i + 1] * nums[i];
    }
  }
  for (i = 0; i < nums.length; i++) {
    if (i === 0) {
      result[i] = postfix[i + 1];
    } else if (i === nums.length - 1) {
      result[i] = prefix[i - 1];
    } else {
      result[i] = prefix[i - 1] * postfix[i + 1];
    }
  }
  console.log(result);
};

productOfAllExceptSelf([1, 2, 3, 4]);
