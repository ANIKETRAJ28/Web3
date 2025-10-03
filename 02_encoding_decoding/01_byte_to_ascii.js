function byteToAscii(byteArray) {
  return [...byteArray].map((byte) => String.fromCharCode(byte)).join("");
}

const byteArray = [72, 101, 108, 108, 111]; // corresponds to Hello
const asciiString = byteToAscii(byteArray);
console.log("ascii string...", asciiString);
