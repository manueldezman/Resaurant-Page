function PageLoad (div) {

    const hero = document.createElement("div");
    hero.classList.add("hero");
    const header = document.createElement("h1");
    const headerText = document.createElement("p");

    header.textContent = "KITCHEN ROYALE";
    headerText.textContent = "Step into our elegant restaurant, where warm ambiance meets the enticing aroma of freshly prepared dishes. Our menu celebrates global flavors, crafted with the finest ingredients to delight every palate. Pair your meal with curated drinks and enjoy a truly unforgettable dining experience";

    const heroBtn = document.createElement("button");
    heroBtn.textContent = "Book a Table";
    heroBtn.classList.add('callToAction');

    hero.appendChild(header);
    hero.appendChild(headerText);
    hero.appendChild(heroBtn);

    div.appendChild(hero);

    const socialEvent = document.createElement("div");
    socialEvent.classList.add("socialEvent");
    socialEvent.classList.add("container");


    const socialEventImage = document.createElement("div");
    const socialEventText = document.createElement("div");

    const eventTextHeader = document.createElement("h2");
    eventTextHeader.classList.add("text-header");
    eventTextHeader.textContent = "Social Events";
    const eventText = document.createElement("p");
    eventText.textContent = "are you looking to have a large social event? No Problem, we will work with you to make your event a hit with everyone"
    const eventBtn = document.createElement("button");
    eventBtn.textContent = "Book a Table";
    eventBtn.classList.add('callToAction');
    
    socialEventText.appendChild(eventTextHeader);
    socialEventText.appendChild(eventText);
    socialEventText.appendChild(eventBtn);

    socialEvent.appendChild(socialEventImage);
    socialEvent.appendChild(socialEventText);

    div.appendChild(socialEvent);


    const menu = document.createElement("div");
    menu.classList.add("menu-container");
    menu.classList.add("container");


    const menuImage = document.createElement("div");

    const imageOne = document.createElement('div');
    imageOne.classList.add("image-one");
    const imageTwo = document.createElement('div');
    imageTwo.classList.add("image-two");
    const imageThree = document.createElement('div');
    imageThree.classList.add("image-three");
    const imageFour = document.createElement('div');
    imageFour.classList.add("image-four");

    menuImage.appendChild(imageOne);
    menuImage.appendChild(imageTwo);
    menuImage.appendChild(imageThree);
    menuImage.appendChild(imageFour);

    const menuTextDiv = document.createElement("div");

    const menuTextHeader = document.createElement("h2");
    menuTextHeader.classList.add("text-header");
    menuTextHeader.textContent = "Menu";


    const menuText = document.createElement("p");
    menuText.textContent = "A diverse menu of fresh, flavorful dishes crafted to delight every taste";

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Checkout menu";
    menuBtn.classList.add('callToAction');
    
    menuTextDiv.appendChild(menuTextHeader);
    menuTextDiv.appendChild(menuText);
    menuTextDiv.appendChild(menuBtn);

    menu.appendChild(menuTextDiv);
    menu.appendChild(menuImage);

    div.appendChild(menu);

}

export { PageLoad };