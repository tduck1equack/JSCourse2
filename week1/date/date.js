const a = 2;
const b = 4;
const c = 2022;
import { us } from "./us.js";
import { uk } from "./uk.js";
import { jp } from "./jp.js";

const displayDate = (a, b, c) => {
    console.log(us(a, b, c));
    console.log(uk(a, b, c));
    console.log(jp(a, b, c));
}

console.log(displayDate(a, b, c));