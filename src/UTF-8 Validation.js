var validUtf8 = function (data) {
  const octet = data.map((value) => {
    let binaryData = value.toString(2);

    if (binaryData.length !== 8) {
      binaryData = binaryData.padStart(8, 0);
    }

    return binaryData;
  });

  let isValidUTF8encoding = true;
  let i = 1;
  let numOfOneFirstData = countOne(octet[0]);

  if (numOfOneFirstData)
    while (isValidUTF8encoding) {
      if (i === octet.length) break;

      const numOfOneTarget = countOne(octet[i]);

      if (numOfOneFirstData - i === numOfOneTarget) isValidUTF8encoding = false;

      i++;
    }

  return isValidUTF8encoding;
};

function countOne(data) {
  let numOfOne = 0;

  for (let str of data) {
    if (str !== "1") break;
    numOfOne++;
  }

  return numOfOne;
}
