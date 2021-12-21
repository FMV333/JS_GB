/*
var a = 1, b = 1, c, d;

c = ++a; alert(c);          // Сначала прибавляется 1 к а, потом записывается в с
                            // c = 2, a = 2

d = b++; alert(d);          // Сначала b записывается в d, потом b
                            // увеличивается на 1   b = 2, d = 1

c = (2+ ++a); alert(c);     // 2 складывается с а увеличенным на 1
                            // a = 3, c = 5

d = (2+ b++); alert(d);     // 2 складывается с а, а после b
                            // увеличивается на 1   b = 3, d = 4

alert(a);                   // a = 3
alert(b);                   // b = 3
*/



/*
var a = 2;                  // a = 2
var x = 1 + (a *= 2);       // x = 1 + a * 2, x = 5
*/



/*
var a = 0, b = -5;

if ((a > 0) & (b > 0)){
    alert(a - b)
} else if ((a < 0) & (b < 0)){
    alert(a * b)
} else if ((a < 0) & (b >= 0)){
    alert(a + b)
} else if ((a >= 0) & (b < 0)){
    alert(a + b)
}
*/



/*
a = 7

switch(a){
    case 1:
        alert(a++);
    case 2:
        alert(a++);
    case 3:
        alert(a++);
    case 4:
        alert(a++);
    case 5:
        alert(a++);
    case 6:
        alert(a++);
    case 7:
        alert(a++);
    case 8:
        alert(a++);
    case 9:
        alert(a++);
    case 10:
        alert(a++);
    case 11:
        alert(a++);
    case 12:
        alert(a++);
    case 13:
        alert(a++);
    case 14:
        alert(a++);
    case 15:
        alert(a++);
        break;
}
*/



/*
var x, y;

function plus(x,y){
    return(x + y)
}

function minus(x,y){
    return(x - y)
}

function multiply(x,y){
    return(x * y)
}

function share(x,y){
    return(x / y)
}
*/



/*
var arg1, arg2, operation;

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case plus:
            alert(plus(arg1, arg2))
            break;
        case minus:
            alert(minus(arg1, arg2))
            break;
        case multiply:
            alert(multiply(arg1, arg2))
            break;
        case share:
            alert(share(arg1, arg2))
            break;
    }
}
*/


/*
var z, z1 = 0;

if (z === z1){
    alert('???')
} else {
    alert('null не равно 0, тк. 0 является числом, а null это пустота')
}
*/