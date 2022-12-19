let john = {
    name: "John",
    age: 25
}
let pete = {
    name: "Pete",
    age: 30
}
let mary = {
    name: "Mary",
    age: 28
}
let users = [john, pete, mary]
let extractedName = []
function nameExtract(array){
    for (let i = 0; i < array.length; i++) {
        extractedName.push(array[i].name);
    }
    return extractedName;
}
let result = nameExtract(users);
console.log(result);