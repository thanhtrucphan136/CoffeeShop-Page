import './style.css';
import githubIcon from './github.png';
import loadHome from './home';
import loadMenu from './menu';

function createHeader(){
    const header = document.createElement('header');
    header.classList.add('header');

    //Coffee Shop Name
    const coffeshopName = document.createElement('h1');
    coffeshopName.classList.add('shop-name');
    coffeshopName.textContent = 'my coffee shop';

    //navigation bar
    const navBar = document.createElement('nav');

    //home button
    const homeBtn = document.createElement('button');
    homeBtn.classList.add('nav-btn');
    homeBtn.textContent = 'home';

    //menu button
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-btn')
    menuBtn.textContent = 'menu';

    //contact button
    const contactBtn = document.createElement('button');
    contactBtn.classList.add('nav-btn');
    contactBtn.textContent = 'contact';

    //append buttons to navigation bar
    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);

    //append coffee shop name and navigation bar to header
    header.appendChild(coffeshopName);
    header.appendChild(navBar);

    return header;
}

function createMain(){
    const main = document.createElement('main');
    main.classList.add('main');
    main.textContent = 'main';
    return main;
}

function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('main');
    footer.textContent = '© 2022 Truc Phan'
    
    const source = document.createElement('a');
    source.href = "https://github.com/thanhtrucphan136/CoffeeShop-Page";
    source.target = "_blank";

    const icon = new Image();
    icon.src = githubIcon;
    icon.classList.add('github');
    source.appendChild(icon);

    footer.appendChild(source);

    return footer

}

function loadWebpage(){
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    //loadHome();
    loadMenu();
}
export default loadWebpage;