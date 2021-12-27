//Задание 1
(function chessShow(){
    console.log('Работает!');
    let chess = document.querySelector('.chess');
    let num = 0;
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if(num%2 == 0){
                chess.innerHTML += '<div class="chess-new"></div>';
            }else{
                chess.innerHTML += '<div class="chess-new black"></div>';
            }
            num++;
        }
        num++;
    }
})()


//Задание 2
const basket = document.querySelector('.basket');

let shoppingCart = []
let emptyBasket = '<p>Ваша корзина пуста</p>'

function Item(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity
}

shoppingCart.push(
    new Item('Tomato', 100, 20)
);
shoppingCart.push(
    new Item('Banana', 150, 5)
);
shoppingCart.push(
    new Item('Pen', 115, 60)
);
shoppingCart.push(
    new Item('Milk', 320, 1)
);
shoppingCart.push(
    new Item('Car', 22000, 3)
);


// выводим перечень товаров в корзине, если корзина не пуста
if (shoppingCart == 0) {
	basket.insertAdjacentHTML('beforeend', `<div class="prod_item total">${emptyBasket}</div>`);
} else {
	for (const iterator of shoppingCart) {
        basket.insertAdjacentHTML('beforeend', 
        `<div class="prod_item">
        <span>Товар - ${iterator.product}</span> 
        <span>Цена товара - ${iterator.price} руб</span>
        <span>Количество - ${iterator.quantity}</span>
        </div>`);
    }
}

// возвращает итоговую сумму
function finalChart(shoppingCart) {
	return shoppingCart.reduce( function (acc, shoppingCart){
        return acc + shoppingCart.quantity
    }, 0)
};

// возвращает итоговое количество
function finalCost(shoppingCart) {
    return shoppingCart.reduce( function (acc, shoppingCart){
        return acc + (shoppingCart.price * shoppingCart.quantity)
    }, 0)
};

// выводим итоговое количество и сумму
if (shoppingCart != 0) {
    const totalPrice = basket.insertAdjacentHTML('beforeend', 
    `<hr><div class="prod_item total">В корзине: ${finalChart(shoppingCart)} товаров на сумму 
    ${finalCost(shoppingCart)} рублей</div>`);
}