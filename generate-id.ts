/**
 * Generates an ID of `length` bytes
 */
export const generateId = (length: number) => {
  const id = new Uint8Array(length);
  const [dwords, remainder] = [length >> 2, length % 4];
  [...Array(dwords)].forEach((_, word) => {
    const number = Math.round(Math.random() * 0xffffffff);
    for (let byte = 0; byte < 4; byte++) {
      const uint8 = (number >> byte) & 0xff;
      id[word + byte] = uint8;
    }
  });
  [...Array(remainder)].forEach((_, i) => {
    const number = Math.round(Math.random() * 0xff);
    id[dwords * 4 + i] = number;
  });

  return id;
};
