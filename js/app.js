'use strict';
var container = document.getElementById('stores');
var times = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
var img = document.createElement('img');
img.setAttribute('src', 'img/salmon.png');
container.appendChild(img);

var allStores = [];

var article = addElement('article', container);
var tableElem = addElement('table', article);
var headerRowElem = addElement('tr', tableElem);
addElement('th', headerRowElem, ' ');


function makeStores() {
  allStores.push(new Store('Seattle', 23, 65, 6.3));
  allStores.push(new Store('Tokyo', 3, 24, 1.2));
  allStores.push(new Store('Dubai', 11, 38, 3.7));
  allStores.push(new Store('Paris', 20, 38, 2.3));
  allStores.push(new Store('Lima', 2, 16, 4.6));
}


function addElement(tag, dog , text) {
  var element = document.createElement(tag);
  dog.appendChild(element);
  element.textContent = text;
  return element;
}

function Store(name, mincust, maxcust, avcust) {
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgcust = avcust;
  this.thingsSold = [];
  this.total = 0;
  this.totalHours = [];


  for (var i = 0; i < times.length; i++) {
    this.thingsSold.push(randomcust(this.mincust, this.maxcust, this.avgcust));
    this.total += this.thingsSold[i];
  }
}
function randomcust(min, max, avrg) {
  var rand = Math.floor(Math.random() * (max - min + 1) + min);
  return Math.floor(rand * avrg);
}

function timesTopRow() {
  for (var i = 0; i < times.length; i++) {
    addElement('th', headerRowElem, times[i]);
  }
  addElement('th', headerRowElem, 'Total');
}



Store.prototype.render = function () {
  var dataRowElem = addElement('tr', tableElem);
  addElement('td', dataRowElem, this.name);
  for (var i = 0; i < times.length; i++) {
    addElement('td', dataRowElem, this.thingsSold[i]);
  }
  addElement('td', dataRowElem, this.total);
};

function callStoresToRender() {
  for (var i = 0; i < allStores.length; i++) {
    var each = allStores[i];
    each.render();
    console.log(each, 'this is all stores');
  }
}

var footerTotal = [];



function totalForHours() {
  for (var j = 0; j < times.length; j++) {
    var hourTotal = 0;
    for (var i = 0; i < allStores.length; i++) {
      hourTotal += allStores[i].thingsSold[j];
    }
    footerTotal.push(hourTotal);
  }
}


function addFooterRow() {
  var completeTotal = 0;
  var footerRow = addElement('tr', tableElem);
  addElement('td', footerRow, 'Totals');
  for (var i =0; i < footerTotal.length; i++){
    addElement('td', footerRow, footerTotal[i]);
    completeTotal += footerTotal[i];
 
  // for (var j = 0; j <footerTotal.length + 1; j++){
  //   console.log(footerTotal[j]);
  //   completeTotal += footerTotal[j];
  //   console.log(completeTotal);
  }
  addElement('td', footerRow, completeTotal);
  
}

function submitHandler(event) {
  event.preventDefault();
  var newLocation = event.target.newStoreLocation.value;
  var newMinCustomers = parseInt(event.target.minCustomers.value);
  var newMaxCustomers = parseInt(event.target.maxCustomers.value);
  var newaveHourleySales = parseInt(event.target.aveHourlySales.value);
  var newStore = new Store(newLocation, newMinCustomers, newMaxCustomers, newaveHourleySales);
  // console.log(newStore);
  allStores.push(newStore);
  tableElem.deleteRow(-1);
  newStore.render();
  addFooterRow();
  event.target.reset();

}



var form = document.getElementById('addStore');
form.addEventListener('submit', submitHandler);

for (var i = 0; i < allStores.length; i++) {
  allStores[i].renderBody(container);
}



makeStores();
timesTopRow();
callStoresToRender();
totalForHours();
addFooterRow();
