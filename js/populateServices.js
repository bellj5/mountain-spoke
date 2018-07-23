let request = new XMLHttpRequest();
let requestUrl = 'http://localhost:3000/data/services.json';

request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

request.onload = function() {
  let data = request.response;
  let section = document.getElementById('services-section');
  let table = document.createElement('table');
  table.classList.add('mountain-table');

  for(let [idx, service] of data.services.entries()) {
    let head = document.createElement('tr');
    head.classList.add('mountain-table--head');
    let row = document.createElement('tr');
    row.classList.add('mountain-table--row');

    for(let [key, value] of Object.entries(service)) {
      let heading = document.createElement('th');
      heading.classList.add('mountain-table--heading');
      heading.textContent = key;
      head.appendChild(heading);

      let cell = document.createElement('td');
      cell.classList.add('mountain-table--cell');
      cell.textContent = value;
      row.appendChild(cell);
    }

    //only push header once
    if(idx === 0) {
      table.appendChild(head);
    }
    table.appendChild(row);
  }

  section.appendChild(table);
}
