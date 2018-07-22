var navExpand = document.querySelector('.mountain-nav--expand');
var navList = document.querySelector('.mountain-nav--list');

navExpand.onclick = function() {
  navList.classList.toggle('mountain-nav--show');
}
