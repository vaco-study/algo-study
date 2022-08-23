const validUtf8 = function (data) {
  const binaryData = data.map((v) => v.toString(2).padStart(8, "0"));

  let count = 0;

  for (const binary of binaryData) {
    const currBytes = binary.indexOf("0");

    if (count === 0) {
      if (currBytes === 0) continue;
      if (currBytes > 4 || currBytes < 2) return false;
      count = currBytes;
    } else {
      if (currBytes !== 1) return false;
    }
    count--;
  }

  return count === 0;
};
