import coffeeShop from '../img/coffeeshop.jpeg';

function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');

    //left side of home
    const left = document.createElement('div');
    left.classList.add('main-left');

    const welcome = document.createElement('p');
    welcome.classList.add('welcome');
    welcome.textContent = 'hello,'

    const quote = document.createElement('p');
    quote.classList.add('quote');
    quote.textContent = 'we are here to fuel you with happy thoughts and COFFEE :)';

    left.appendChild(welcome);
    left.appendChild(quote);

    //right side of home

    const right = document.createElement('div');

    const shop = new Image();
    shop.classList.add('shop-img')
    shop.src = coffeeShop;

    right.appendChild(shop);

    //append left and right to home
    home.appendChild(left);
    home.appendChild(right);

    return home;
}

function loadHome(){
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;