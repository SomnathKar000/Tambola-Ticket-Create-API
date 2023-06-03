let tokenArray = [];
let ZeroIndexArray = [];

const getNumber = (totalnumber) => {
  const number = Math.floor(Math.random() * totalnumber);
  return number;
};
const zeroIndexArrayInput = () => {
  ZeroIndexArray = [
    ...Array.from({ length: 8 }, (_, i) => {
      return i;
    }),
    ...Array.from({ length: 8 }, (_, i) => {
      return i;
    }),
  ];
};
zeroIndexArrayInput();

const randomzeroIndex = () => {
  const array = Array.from({ length: 4 }, () => {
    let numberIndex = getNumber(ZeroIndexArray.length);
    let number = ZeroIndexArray[numberIndex];

    ZeroIndexArray.splice(numberIndex, 1);
    return number;
  }).sort();
  return array;
};

const singleArray = () => {
  const ZeroArray = [...randomzeroIndex()];
  console.log(ZeroArray);
  let zeroIndex = 0;
  const array = Array.from({ length: 9 }, (_, index) => {
    if (ZeroArray[zeroIndex] === index) {
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

  return tokenArray;
};

const generateUniqueTicket = () => {
  return generateTicket();
};

module.exports = generateUniqueTicket;
