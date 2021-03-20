// Functions Params
function logParams(a,b,c){
    console.log(a,b,c);
};

logParams(1,2,3);
logParams(1,2,3,4,5);
logParams(1,2);

function defaultParams(a = null, b = null, c =null ){
    console.log(a,b,c);
};

defaultParams(7,8,9);
defaultParams();
defaultParams(5);
defaultParams(5,6);

//Spread/rest
function logNumbers (...numbers){
    console.log(Array.isArray(numbers));
    for (let n of numbers) {
        console.log(n);
    }
};       

logNumbers([1,2,3,4,5,6,7,8,9,10]);

function sumTotal(...numbers){
    let total = 0;
    for(let x of numbers){
        total += x;
    }
    return total;
}

console.log(sumTotal(1,2,3,4));