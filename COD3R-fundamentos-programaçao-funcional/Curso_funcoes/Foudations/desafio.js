// Create a range function
function createRange(a, b, s = 1){
    const el1 = b === undefined ? 1 : a;
    const el2 = b === undefined ? a : b;
    const step = el1 <= el2 ? Math.abs(s) : -Math.abs(s); 

    const els = [];

    for(let i=el1; el1 <= el2 ? i<=el2 : i>=el2; i += step){
        els.push(i);
    }

    return els;
}
// range(5) => [1, 2, 3, 4, 5]
console.log(createRange(5));

// range(6,11) => [6, 7, 8, 9, 10, 11]
console.log(createRange(6,11));

// range(10,19,2) => [10, 12, 14, 16, 18]
console.log(createRange(10, 19, 2));

// range (6,2) => [6, 5, 4, 3, 2]
console.log(createRange(6,2));

// range (8, -3, 4) => [8, 4, 0]
console.log(createRange(8,-3, 4));
