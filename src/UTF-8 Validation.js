var validUtf8 = function (data) {
  debugger;
  const octet = data.map((value) => {
    let binaryData = value.toString(2);

    if (binaryData.length !== 8) {
      binaryData = binaryData.padStart(8, 0);
    }

    return binaryData;
  });

  let current = 0;

  for (let i = 0; i < octet.length; i++) {
    let bytes = octet[i].indexOf("0");

    if (current === 0) {
      if (bytes === 0) continue;
      if (bytes > 4 || bytes < 2) return false;

      current = bytes;
    } else {
      if (bytes !== 1) return false;
    }

    current--;
  }

  return current === 0;
};
