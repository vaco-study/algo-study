const validUtf8 = function (data) {
  const binaryData = data.map((v) =>
    v.toString(2).length === 8
      ? v.toString(2)
      : "0".repeat(8 - v.toString(2)) + v.toString(2)
  );

  const nBytes =
    binaryData[0].indexOf("0") === 0 ? 1 : binaryData[0].indexOf("0");

  for (const [i, binary] of binaryData.entries()) {
  }
};
