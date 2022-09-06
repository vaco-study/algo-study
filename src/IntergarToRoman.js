const intToRoman = function (num) {
  const numToString = "" + num;
  const digit = numToString.length;
  let result = "";

  if (digit >= 4) {
    result = result + stringIncoder(4, digit, numToString, []);
  }

  if (digit >= 3) {
    result =
      result + stringIncoder(3, digit, numToString, ["C", "CD", "D", "CM"]);
  }

  if (digit >= 2) {
    result =
      result + stringIncoder(2, digit, numToString, ["X", "XL", "L", "XC"]);
  }

  if (digit >= 1) {
    result =
      result + stringIncoder(1, digit, numToString, ["I", "IV", "V", "IX"]);
  }

  return result;
};

const stringIncoder = function (
  position,
  digit,
  numToString,
  stringCollection
) {
  let result = "";

  if (position >= 4) {
    result += "M".repeat(Number(numToString[0]));
  } else {
    const targetIndex = digit - position;
    const targetNumber = Number(numToString[targetIndex]);

    if (targetNumber < 4) {
      result += stringCollection[0].repeat(Number(numToString[targetIndex]));
    } else if (targetNumber === 4) {
      result += stringCollection[1];
    } else if (targetNumber > 4 && targetNumber < 9) {
      result +=
        stringCollection[2] +
        stringCollection[0].repeat(Number(numToString[targetIndex]) - 5);
    } else {
      result += stringCollection[3];
    }
  }

  return result;
};
