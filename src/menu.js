import coffee1 from '../img/coffee1.png';
import coffee2 from '../img/coffee2.png';
import croffleimg from '../img/croffle.png';

function createMenuItem(name, price){
    const item = document.createElement('div');
    item.classList.add('item-container');

    const itemName = document.createElement('span');
    itemName.textContent = name;
    item.classList.add('item');

    const itemPrice = document.createElement('span');
    itemPrice.textContent = price;
    item.classList.add('price');

    item.appendChild(itemName);
    item.appendChild(itemPrice);

    return item;
}

function createTitle(name){
    const title = document.createElement('p');
    title.textContent = name;
    title.classList.add('menu-title');
    return title;
}

function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    //coffee menu
    const coffee = document.createElement('div');
    coffee.classList.add('coffee');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const coffeeImg1 = new Image();
    coffeeImg1.classList.add('coffee-img');
    coffeeImg1.src = coffee1;
    const coffeeImg2 = new Image();
    coffeeImg2.classList.add('coffee-img');
    coffeeImg2.src = coffee2;

    imgContainer.appendChild(coffeeImg1);
    imgContainer.appendChild(coffeeImg2);

    const coffeeItems = document.createElement('div');
    coffeeItems.classList.add('items');
    const coffeeLeft = document.createElement('div');
    coffeeLeft.classList.add('coffee-left');
    
    coffeeLeft.appendChild(createMenuItem('espresso', '4'));
    coffeeLeft.appendChild(createMenuItem('cappuccino', '5'));
    coffeeLeft.appendChild(createMenuItem('americano', '5'));
    coffeeLeft.appendChild(createMenuItem('cocoa', '5'));
    coffeeLeft.appendChild(createMenuItem('latte', '6'));

    const coffeeRight = document.createElement('div');
    coffeeRight.classList.add('coffee-right');
    coffeeRight.appendChild(createMenuItem('latte macchiato', '6'));
    coffeeRight.appendChild(createMenuItem('frappe', '6'));
    coffeeRight.appendChild(createMenuItem('iced frappe', '6'));
    coffeeRight.appendChild(createMenuItem('glace', '6'));
    coffeeRight.appendChild(createMenuItem('mocha', '6'));

    coffeeItems.appendChild(coffeeLeft);
    coffeeItems.appendChild(coffeeRight);

    coffee.appendChild(imgContainer);
    coffee.appendChild(createTitle('coffee'));
    coffee.appendChild(coffeeItems);
    
    //croffle menu

    const croffle = document.createElement('div');
    croffle.classList.add('croffle');

    const croffleImgContainer = document.createElement('div');
    croffleImgContainer.classList.add('img-container');

    const croffleImg = new Image();
    croffleImg.src = croffleimg;
    croffleImg.classList.add('croffle-img');

    croffleImgContainer.appendChild(croffleImg);

    const croffleItems = document.createElement('div');
    croffleItems.classList.add('items');
    const croffleLeft = document.createElement('div');
    croffleLeft.classList.add('croffle-left');
    croffleLeft.appendChild(createMenuItem('original', '4'));
    croffleLeft.appendChild(createMenuItem('strawberry', '5'));
    croffleLeft.appendChild(createMenuItem('chocobana', '5'));
    croffleLeft.appendChild(createMenuItem('chocolate', '5'));
    croffleLeft.appendChild(createMenuItem('blueberry', '5'));

    const croffleRight = document.createElement('div');
    croffleRight.classList.add('croffle-right');
    croffleRight.appendChild(createMenuItem('raspberry', '5'));
    croffleRight.appendChild(createMenuItem('honey', '5'));
    croffleRight.appendChild(createMenuItem('spread butter', '5'));
    croffleRight.appendChild(createMenuItem('cube butter', '5'));

    croffleItems.appendChild(croffleLeft);
    croffleItems.appendChild(croffleRight);
    
    croffle.appendChild(croffleImgContainer);
    croffle.appendChild(createTitle('croffle'));
    croffle.appendChild(croffleItems);

    menu.appendChild(coffee);
    menu.appendChild(croffle);
    return menu;
}

function loadMenu(){
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;