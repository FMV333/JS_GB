let goods = [
    {
        name: 'Наушники Sony WH-1000XM3',
        price: '24990',
        description: 'Bluetooth-наушники с микрофоном, полноразмерные, закрытые, время работы 38 ч',
    },
    {
        name: 'Процессор AMD Ryzen 7 3700X',
        price: '26147',
        description: 'Socket: AM4, Объем кэша L3: 32768 КБ, Количество ядер: 8, Частота процессора: 3600 МГц',
    },
    {
        name: 'Монитор Eizo FlexScan EV2750',
        price: '62691',
        description: 'ЖК-монитор с диагональю 27", тип матрицы экрана TFT IPS, разрешение 2560x1440 (16:9)',
    },
    {
        name: 'Смартфон Apple iPhone Xs Max 256GB',
        price: '93990',
        description: 'смартфон с iOS 12, поддержка двух SIM-карт (nano SIM+eSIM), экран 6.5", разрешение 2688x1242',
    }
],
    basket = [],
    goodsBlock = document.getElementsByClassName('goods')[0];

for (let i = 0; i < goods.length; i++){
    let good = document.createElement('div');
    good.setAttribute('class', 'good');
    good.innerHTML = '<h3>'+goods[i].name+'</h3>';
    good.innerHTML += '<span><b>Цена:</b> '+goods[i].price+'</span><br>';
    good.innerHTML += '<span><b>Описание:</b> '+goods[i].description+'</span><br>';
    good.innerHTML += '<a id="'+i+'" href="#" class="add">Добавить в корзину</a><hr>';
    goodsBlock.appendChild(good);
    document.getElementById(i).addEventListener('click', addInBasket);
}

function addInBasket() {
    if(checkBasket(this.id)){
        let newOrder = {
            id: this.id,
            count: 1
        };
        basket.push(newOrder);
    }else{
        for (let key in basket){
            if(basket[key].id == this.id) ++basket[key].count;
        }
    }
    drawBasket();
    console.log(basket);
}

function checkBasket(id){
    if(basket.length > 0){
        for(let i = 0; i < basket.length; i++){
            if (basket[i].id == id) return false;
        }
    }
    return true;
}

function drawBasket() {
    let basketBlock = document.getElementsByClassName('basket')[0];
    basketBlock.innerHTML = '<table class="basketTable">' +
                                '<tr>' +
                                    '<td>Наименование товара &nbsp;</td>' +
                                    '<td>Цена за 1 штуку &nbsp</td>' +
                                    '<td>Количество штук &nbsp</td>' +
                                    '<td>Итого</td>' +
                                '</tr>' +
                            '</table>';

    let basketTable = document.getElementsByClassName('basketTable')[0],
        fullOrderPrice = 0;

    for(let i = 0; i < basket.length+1; i++){
        let rowOrder = document.createElement('tr'),
            tdName = document.createElement('td'),
            tdPrice = document.createElement('td'),
            tdHowMuch = document.createElement('td'),
            tdSumPrice = document.createElement('td');

        if (i < basket.length) {
            tdName.innerText = goods[basket[i].id].name;
            tdPrice.innerText = goods[basket[i].id].price;
            tdHowMuch.innerText = basket[i].count;
            tdSumPrice.innerText = basket[i].count * goods[basket[i].id].price;
            fullOrderPrice += basket[i].count * goods[basket[i].id].price;
        }else{
            tdName.innerText = 'Итого';
            tdPrice.innerText = '';
            tdHowMuch.innerText = '';
            tdSumPrice.innerText = fullOrderPrice;
        }

        rowOrder.appendChild(tdName);
        rowOrder.appendChild(tdPrice);
        rowOrder.appendChild(tdHowMuch);
        rowOrder.appendChild(tdSumPrice);
        basketTable.appendChild(rowOrder);
    }
    console.log(basketBlock);
}