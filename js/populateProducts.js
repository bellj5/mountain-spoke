let request = new XMLHttpRequest();
let requestUrl = 'https://bellj5.github.io/mountain-spoke/data/products.json';

request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

request.onload = function() {
  let data = request.response;
  let section = document.getElementById('product-section');

  for(let product of data.products) {
    let article = document.createElement('article');

    let title = document.createElement('h3');
    title.textContent = product.name;

    let list = document.createElement('ul');

    //Create and append Price
    let price = document.createElement('li');
    let priceTitle = document.createElement('strong');
    priceTitle.textContent = "Price: ";

    let priceValue = document.createElement('span');
    priceValue.textContent = '$' + product.price;

    price.appendChild(priceTitle);
    price.appendChild(priceValue);

    list.appendChild(price);

    //Create and append Weight
    let weight = document.createElement('li');
    let weightTitle = document.createElement('strong');
    weightTitle.textContent = "Weight: ";

    let weightValue = document.createElement('span');
    weightValue.textContent = product.weight;

    weight.appendChild(weightTitle);
    weight.appendChild(weightValue);

    list.appendChild(weight);

    //Create and append WheelSize
    let wheelSize = document.createElement('li');
    let wheelSizeTitle = document.createElement('strong');
    wheelSizeTitle.textContent = "Wheel Size: ";

    let wheelSizeValue = document.createElement('span');
    wheelSizeValue.textContent = product.wheelSize;

    wheelSize.appendChild(wheelSizeTitle);
    wheelSize.appendChild(wheelSizeValue);

    list.appendChild(wheelSize);

    //Create and append Gears
    let gears = document.createElement('li');
    let gearsTitle = document.createElement('strong');
    gearsTitle.textContent = "Gears: ";

    let gearsValue = document.createElement('span');
    gearsValue.textContent = product.gears;

    gears.appendChild(gearsTitle);
    gears.appendChild(gearsValue);

    list.appendChild(gears);

    //Create and append Frame
    let frame = document.createElement('li');
    let frameTitle = document.createElement('strong');
    frameTitle.textContent = "Frame: ";

    let frameValue = document.createElement('span');
    frameValue.textContent = product.frame;

    frame.appendChild(frameTitle);
    frame.appendChild(frameValue);

    list.appendChild(frame);

    //Create and append image
    let img = document.createElement('img');
    img.setAttribute('src', 'https://bellj5.github.io/mountain-spoke/assets/' + product.img);
    img.style.width = "30%";

    //Create and append description
    let description = document.createElement('p');
    description.textContent = product.description;

    section.appendChild(title);
    let container = document.createElement('div');
    container.appendChild(list);
    container.appendChild(img);
    container.appendChild(description);
    section.appendChild(container);
  }

  $('#product-section').accordion();
}
