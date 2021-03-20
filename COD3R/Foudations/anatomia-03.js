//Function Expression
const increment1 = function(n){
    return n + 1;
};

// Arrow function is always anonymous function
const increment2 = (n) => {
    return n + 1;
};

// Arrow function shotcut to one param
const increment3 = n =>{
    return n + 1;
};

// Arrow function in one line don't needs return keywords because its impliced  and {}

const increment4 = n => n + 1;

console.log(increment1(1));
console.log(increment2(5));
console.log(increment3(2));
console.log(increment4(7));

// Arrow function with two params or more
const sum = (a,b) => a + b;

console.log(sum(5,5));