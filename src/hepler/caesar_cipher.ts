import config from "../config";

const rot = (text: String, offset: number) =>
  text
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + offset))
    .join("");

const encode = (text: String) => rot(text, config.caesarOffset);
const decode = (text: String) => rot(text, -config.caesarOffset);
export { encode, decode };
