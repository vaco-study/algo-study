/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
  let counter = 0;
  const binaryData = [];

  data.forEach((element) => {
    const binaryNumber = element.toString(2);
    if (binaryNumber.length < 8) {
      const lengthForAdding = 8 - binaryNumber.length;
      binaryData.push("0".repeat(lengthForAdding) + binaryNumber);
    } else if (binaryNumber.length === 8) {
      binaryData.push(binaryNumber);
    }
  });

  if (binaryData.length === 1 && binaryData[0][0] !== "0") return false;

  for (let i = 0; i < binaryData.length; i++) {
    if (counter > 0) {
      if (binaryData[i].slice(0, 2) === "10") {
        counter--;
      } else {
        break;
      }
    } else if (counter === 0) {
      if (binaryData[i][0] === "0") {
        continue;
      } else {
        if (i === binaryData.length - 1) return false;

        const target = binaryData[i];

        for (let j = 1; j < 4; j++) {
          if (target[j] === "1") {
            counter++;
          } else {
            break;
          }
        }
      }
    }
  }

  return counter > 0 ? false : true;
};
