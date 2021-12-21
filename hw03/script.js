// Задание 1
var num = 1;
while(num <= 100){
    let check = true;
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            check = false;
            break;
        }
    }
    if(check)console.log(num);
    num++;
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

function countBasketPrice(basket) {
    let BasketPrice = 0;
    for (let prod of basket){
        BasketPrice += prod.price;
    }
    return BasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket));

//Задание 3
for (let i = 0; i < 10; console.log(i++)) {}

//Задание 4
var row = 'x';
        for (let i = 0; i < 20; i++){
            console.log(row);
            row += 'x';
        }