'use strict';

var container = document.getElementById('stores');
var article = addElement('article', container);
var tableElem = addElement('table', article);

var times = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function addElement(tag, container, text) {
    var element = document.createElement(tag);
    container.appendChild(element);
    element.textContent = text;
    return element;
}

function Store(name, mincustomer, maxcustomer, averagecustomer) {
    this.name = name;
    this.mincustomer = mincustomer;
    this.maxcustomer = maxcustomer;
    this.averagecustomer = averagecustomer;
    this.hourly = [];
    this.totalMoney = 0;
}

Store.prototype.renderData = function () {
    var tableTr = addElement('tr', tableElem);
    addElement('td', tableTr, this.name);
    for (var i = 0; i < this.hourly.length; i++) {
        addElement('td', tableTr, this.hourly[i]);
        addElement('td', tableTr, this.totalMoney);
        }
        };
function getcustomersales(store) {
    for (var i = 0; i < times.length; i++) {
        var customer = Math.floor(Math.random() * (store.maxcustomer - store.mincustomer + 1)) + store.mincustomer;
        var sales = Math.ceil(store.average * customer);
        store.hourly.push(sales);
        store.totalSales += sales;
    }
}

function renderTimes() {
    var tableTr = addElement('tr', tableElem);
    addElement('th', tableTr);
    for (var i = 0; i < times.length; i++) {
        addElement('th', tableTr, times[i]);
    }
    addElement('th', tableTr, 'Daily total');
}


var seattle = new Store('seattle', 23, 65, 6.3);
getcustomersales(seattle);
seattle.renderData(renderTimes());
var tokyo = new Store('tokyo', 3, 24, 1.2);
getcustomersales(tokyo);
tokyo.renderData(renderTimes());
var dubai = new Store('dubai', 11, 38, 3.7);
getcustomersales(dubai);
dubai.renderData(rendertimes());
var paris = new Store('paris', 20, 38, 2.3);
getcustomersales(paris);
paris.renderData(rendertimes());
var lima = new Store('lima', 2, 16, 4.6);
getcustomersales(lima);
lima.renderData(rendertimes());