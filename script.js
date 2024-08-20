// encode decode

const arr = ["neet", "code", "love", "you"];

const encode = (strs) => {
  const encoded = strs.map((str) => str.length + "#" + str).join("");
  decode(encoded);
};

const decode = (s) => {
  const decoded = [];
  let i = 0;
  while (i < s.length) {
    const delimiterIndex = s.indexOf("#", i);
    const length = parseInt(s.substring(i, delimiterIndex));
    i = delimiterIndex + 1;
    decoded.push(s.substring(i, i + length));
    i = i + length;
  }
  console.log(decoded);
};

encode(arr);

// group anagrams

const groupAnagrams = (strs) => {
  const groups = {};
  strs.forEach((str) => {
    const sortedStr = str.split("").sort().join("");
    if (groups[sortedStr]) {
      groups[sortedStr].push(str);
    } else {
      groups[sortedStr] = [str];
    }
  });
  return Object.values(groups);
};

console.log(groupAnagrams(strs));

// two sum

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

// is valid palindrome
const string = "A man, a plan, a canal: Panama"

const isValidPalindrome = (s) => {
    // s = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    // let isValid = true
    // const strArr = s.split('')
    // strArr.forEach((e,i) => {
    //     console.log(e,strArr[strArr.length-1-i])
    //     if(e !== strArr[strArr.length-1-i]) {
    //         isValid = false
    //     } 
    // })
    // return isValid
    s = s.replace(/[^a-zA-Z0-9]/g,'')
    s = s.toLowerCase()
    for (let [i,j]=[0,s.length-1]; i<j;) {
        if (s[i]!=s[j]) {
            return false
        }
        i++
        j--
    }
    return true
}

console.log(isValidPalindrome(string))
