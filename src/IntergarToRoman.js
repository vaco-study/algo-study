const intToRoman = function (num) {
  const numToString = "" + num;
  const digit = numToString.length;
  let result = "";

  if (digit >= 4) {
    result += "M".repeat(Number(numToString[0]));
  }

  if (digit >= 3) {
    const targetIndex = digit - 3;
    const targetNumber = Number(numToString[targetIndex]);

    if (targetNumber < 4) {
      result += "C".repeat(Number(numToString[targetIndex]));
    } else if (targetNumber === 4) {
      result += "CD";
    } else if (targetNumber > 4 && targetNumber < 9) {
      result += "D" + "C".repeat(Number(numToString[targetIndex]) - 5);
    } else {
      result += "CM";
    }
  }

  if (digit >= 2) {
    const targetIndex = digit - 2;
    const targetNumber = Number(numToString[targetIndex]);

    if (targetNumber < 4) {
      result += "X".repeat(Number(numToString[targetIndex]));
    } else if (targetNumber === 4) {
      result += "XL";
    } else if (targetNumber > 4 && targetNumber < 9) {
      result += "L" + "X".repeat(Number(numToString[targetIndex]) - 5);
    } else {
      result += "XC";
    }
  }

  if (digit >= 1) {
    const targetIndex = digit - 1;
    const targetNumber = Number(numToString[targetIndex]);

    if (targetNumber < 4) {
      result += "I".repeat(Number(numToString[targetIndex]));
    } else if (targetNumber === 4) {
      result += "IV";
    } else if (targetNumber > 4 && targetNumber < 9) {
      result += "V" + "I".repeat(Number(numToString[targetIndex]) - 5);
    } else {
      result += "IX";
    }
  }

  return result;
};
