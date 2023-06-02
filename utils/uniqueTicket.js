let tokenArray = [];
let ZeroIndexArray = [];

const getNumber = (totalnumber) => {
  const number = Math.floor(Math.random() * totalnumber);
  return number;
};

const randomzeroIndex = () => {
  const array = Array.from({ length: 4 }, () => {
    let number = getNumber(9);
    return number;
  }).sort();
  return array;
};

const singleArray = () => {
  ZeroIndexArray.push(randomzeroIndex());
  let zeroIndex = 0;
  const array = Array.from({ length: 9 }, (_, index) => {
    if (ZeroIndexArray[ZeroIndexArray.length - 1][zeroIndex] === index) {
      zeroIndex++;
      return 0;
    }
    const addNo = index * 10 + 1;
    let number = getNumber(10) + addNo;
    while (tokenArray.flat().includes(number)) {
      number = getNumber(10) + addNo;
    }
    return number;
  });
  return array;
};

const generateTicket = () => {
  tokenArray.push(singleArray());
  tokenArray.push(singleArray());
  tokenArray.push(singleArray());
  console.log(tokenArray);
  console.log(ZeroIndexArray);

  return tokenArray;
};

const generateUniqueTicket = () => {
  return generateTicket();
};

module.exports = generateUniqueTicket;
