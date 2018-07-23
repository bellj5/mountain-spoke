let url = window.location.href;
let pageName = url.substring(url.lastIndexOf('.'), url.lastIndexOf('/') + 1);

let currTab = document.querySelector('li > a[href*=' + pageName + ']').parentNode;
currTab.style.background = "rgb(96, 156, 255)";
