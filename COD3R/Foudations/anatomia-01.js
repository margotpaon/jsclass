// Function Declaration

function sayHello(){
    /*TO DO*/
    console.log("Hello!");
}

// Call Function
sayHello();


// with Param but without return
function sayHelloTo(name){
    console.log('Hello '+name);
}

sayHelloTo('Margot');


// with return but without param
function returnHi(){
    return 'Hi!';
}

const greetings = returnHi();
console.log(greetings);
console.log(returnHi());

// with param and return =D
function returnHiTo(name){
    return `Hi ${name}!`;
}

console.log(returnHiTo('Malu'));