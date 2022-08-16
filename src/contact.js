import caffeeWallle from '../img/coffeewaffle.png';

function createTime(date,start,end){
    const day = document.createElement('p');
    day.classList.add('day');
    
    const dateDiv = document.createElement('span');
    dateDiv.classList.add('date-div');
    dateDiv.textContent = `${date}: `;

    const hoursDiv = document.createElement('span');
    hoursDiv.classList.add('hours-div');
    hoursDiv.textContent = `${start}am - ${end}pm`;

    day.appendChild(dateDiv);
    day.appendChild(hoursDiv);

    return day;
}

function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactHeader = document.createElement('p');
    contactHeader.classList.add('contact-header');
    contactHeader.textContent = 'hi! visit us at:';

    const contactImg = new Image();
    contactImg.classList.add('contact-img');
    contactImg.src = caffeeWallle;

    const address = document.createElement('p');
    address.classList.add('address');
    address.textContent = 'address: 1306 coffee ave, seattle, wa';

    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('phone');
    phoneNumber.textContent = 'phone: 123 456 789';

    const openHours = document.createElement('div');
    openHours.appendChild(createTime('monday-friday','8','6'));
    openHours.appendChild(createTime('saturday-sunday','9','6'));

    const contactContainer =document.createElement('div');
    contactContainer.classList.add('contact-container');

    contactContainer.appendChild(contactHeader);
    contactContainer.appendChild(address);
    contactContainer.appendChild(phoneNumber);
    contactContainer.appendChild(openHours);

    contact.appendChild(contactImg);
    contact.appendChild(contactContainer);

    return contact;
}

function loadContact(){
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;

