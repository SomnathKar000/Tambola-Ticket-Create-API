const { findTickets } = require("../services/ticketService");

let tokenArray = [];
let ZeroIndexArray = [];

const getNumber = (totalnumber) => {
  const number = Math.floor(Math.random() * totalnumber);
  return number;
};

const thirdZeroIndexArray = () => {
  let arrayValues = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let arr = ZeroIndexArray.flat().sort();
  arr.forEach((item, index) => {
    if (item === arr[index + 1]) {
      const i = arrayValues.indexOf(item);
      arrayValues.splice(i, 1);
    }
    return item;
  });
  return arrayValues;
};

const randomzeroIndex = () => {
  let arrayValues = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  if (ZeroIndexArray.length >= 2) {
    arrayValues = thirdZeroIndexArray();
  }

  let array = [];
  while (array.length < 4) {
    let currentIndex = arrayValues.length;
    const randomIndex = Math.floor(Math.random() * currentIndex);
    array.push(arrayValues[randomIndex]);
    arrayValues.splice(randomIndex, 1);
  }
  array = array.sort();
  ZeroIndexArray.push(array);
  return array;
};

const singleArray = () => {
  const ZeroArray = [...randomzeroIndex()];
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

const generateUniqueTicket = async () => {
  tokenArray = [singleArray(), singleArray(), singleArray()];
  let find = await findTickets({ token: tokenArray });
  while (find.length) {
    let randomNumber = Math.floor(Math.random() * 3);
    tokenArray.splice(randomNumber, 1);
    ZeroIndexArray.splice(randomNumber, 1);
    tokenArray.push(singleArray());
    find = await findTickets({ token: tokenArray });
  }
  return tokenArray;
};

module.exports = generateUniqueTicket;
