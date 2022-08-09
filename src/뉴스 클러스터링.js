function solution(str1, str2) {
  const [lowStr1, lowStr2] = [str1.toLowerCase(), str2.toLowerCase()];
  const alpRegex = /^[a-z|A-Z]+$/;
  const [subArr1, subArr2] = [[], []];

  for (let i = 0; i < lowStr1.length - 1; i++) {
    const candidate = lowStr1.substring(i, i + 2);

    if (!alpRegex.test(candidate)) continue;

    subArr1.push(candidate);
  }

  for (let i = 0; i < lowStr2.length - 1; i++) {
    const candidate = lowStr2.substring(i, i + 2);

    if (!alpRegex.test(candidate)) continue;

    subArr2.push(candidate);
  }

  const [set1, set2] = [new Set(subArr1), new Set(subArr2)];
  const union = new Set([...set1, ...set2]);
  const intersection = new Set([...set1].filter((x) => set2.has(x)));
  let [intersectionSize, unionSize] = [0, 0];

  union.forEach(
    (element) =>
      (unionSize += Math.max(
        subArr1.filter((v) => v === element).length,
        subArr2.filter((v) => v === element).length
      ))
  );

  intersection.forEach(
    (element) =>
      (intersectionSize += Math.min(
        subArr1.filter((v) => v === element).length,
        subArr2.filter((v) => v === element).length
      ))
  );

  return intersectionSize === unionSize
    ? 65536
    : parseInt((intersectionSize / unionSize) * 65536);
}
