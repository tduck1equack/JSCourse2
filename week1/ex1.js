const n = prompt("Number of elements:");
const a = parseInt(prompt("Start:"));
const b = parseInt(prompt("End:"));
const array = [];
for (let i = 0; i < n; i++) {
    let tmp = parseInt(prompt("Element:"));
    array.push(tmp);
}
let filteredArray =[];
function filterRange(array, a, b){
    for (let i = 0; i < n; i++) {
        if (array[i] <= b && array[i] >= a) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}
let result = filterRange(array, a, b);
console.log(result);