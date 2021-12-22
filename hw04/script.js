//Задание 1
var num = 741;
var bascet = {}
function newObject (num) {
    if ((num >= 1) & (num <= 999)){
        let sNum = num.toString();
        let bascet = {
            'Единицы' : sNum.charAt(2),
            'Десятки' : sNum.charAt(1),
            'Сотни' : sNum.charAt(0),
        };
        console.log(bascet);
    }else{
        console.log('Введите число в диапозоне от 1 до 999 !!!');
    }
}


//Задание 2

var basket = [
    {
        product: "aple",
        price: 10
    },
    {
        product: "banana",
        price: 20
    },
    {
        product: "cucumber",
        price: 15
    },
    {
        product: "tomato",
        price: 25
    }
];

var initialValue = 0;
var sum = basket.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.price;
}, initialValue)
console.log(sum);