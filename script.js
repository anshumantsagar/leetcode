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
