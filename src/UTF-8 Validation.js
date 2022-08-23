var validUtf8 = function (data) {
  const octet = data.map((value) => {
    let binaryData = value.toString(2);

    if (binaryData.length !== 8) {
      binaryData = binaryData.padStart(8, 0);
    }

    return binaryData;
  });

  let isValidUTF8encoding = true;
  let i = 0;
  let current = 0;

  while (isValidUTF8encoding && i < octet.length) {
    let bytes = octet[i].indexOf("0");

    if (current === 0) {
      if (bytes === 0) continue;
      if (bytes > 4 || bytes < 2) {
        isValidUTF8encoding = false;

        continue;
      }

      current = bytes;
    } else {
      if (bytes !== 1) {
        isValidUTF8encoding = false;
      }
    }

    i++;
  }

  return isValidUTF8encoding;
};
