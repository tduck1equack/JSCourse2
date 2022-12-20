let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr) {
    let sum;
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i].age);
        console.log(sum)
        console.log(typeof(sum))
    }
    let result = sum / parseInt(arr.length);
    return result;
}
getAverageAge(arr)
console.log(typeof(getAverageAge(arr)))
console.log(getAverageAge(arr));
 // (25 + 30 + 29) / 3 = 28