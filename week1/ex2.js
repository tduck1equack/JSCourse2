const n = prompt("Number of elements:");
const a = parseInt(prompt("Start:"));
const b = parseInt(prompt("End:"));
const array = [];
for (let i = 0; i < n; i++) {
    let tmp = parseInt(prompt("Element:"));
    array.push(tmp);
}
function filterRangeInPlace(array, a, b){
    for (let i = 0; i < n; i++) {
        if (array[i] > b || array[i] < a) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}
let result = filterRangeInPlace(array, a, b);
console.log(result);