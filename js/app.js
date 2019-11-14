'use strict';
var container = document.getElementById('stores');
var times = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
var container = document.getElementById('stores');
var img = document.createElement('img');
img.setAttribute('src', 'img/salmon.png');
container.appendChild(img);


function randomcust (min, max, avrg) {
  var rand = Math.floor(Math.random() * (max - min + 1) + min);
  return Math.floor(rand * avrg);
}
function Store (name, mincust, maxcust, avcust) {
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgcust = avcust;
  this.thingsSold = [];
  this.total = 0;

  for (var i = 0; i < 14; i++) {
    this.thingsSold.push(randomcust(this.mincust, this.maxcust, this.avgcust));
    this.total += this.thingsSold[i];
  }
}
var article = addElement('article', container);
var tableElem = addElement('table', article);
var headerRowElem = addElement('tr', tableElem);
addElement('th', headerRowElem, ' ');

for (var i = 0; i < 14; i++) {
  addElement('th', headerRowElem, times[i]);
}
addElement('th', headerRowElem, 'Total');

Store.prototype.render = function() {
  var dataRowElem = addElement('tr', tableElem);
  addElement('td', dataRowElem, this.name);
  for (var i = 0; i < 14; i++) {
    addElement('td', dataRowElem,this.thingsSold[i]);
  }
  addElement('td', dataRowElem, this.total);
}

var container = document.getElementById('stores');

var store = [];

store.push(new Store('Seattle',23,65,6.3));
store.push(new Store('Tokyo',3,24,1.2));
store.push(new Store('Dubai',11,38,3.7));
store.push(new Store('Paris',20,38,2.3));
store.push(new Store('Lima',2,16,4.6));

function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  element.textContent = text;
  return element;
}
for(var i = 0; i < store.length; i++) {
  var each = store[i];
  each.render(container);
}