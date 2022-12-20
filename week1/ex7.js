let arr = [2, 3, 6, 8, 1]

function shuffle(arr) {
    let m = arr.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }
    return arr;
}
console.log(shuffle(arr));

// Credits: https://bost.ocks.org/mike/shuffle/