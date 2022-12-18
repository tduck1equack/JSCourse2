const n = prompt("Number of elements:");
const array = [];
for (let i = 0; i < n; i++) {
    let tmp = prompt("Element:");
    array.push(tmp);
}
function copySorted(array){
    let sortedArray = array.slice(0);
    sortedArray.sort();
    return sortedArray;
}
let result = copySorted(array);
console.log("Default: " + array);
console.log(result);