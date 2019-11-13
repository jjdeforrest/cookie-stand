'use strict';

var container = document.getElementById('stores');
var img = document.createElement('img');
img.setAttribute('src', 'img/salmon.png');
container.appendChild(img);

var times = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
    name: 'seattle',
    mincust: 23,
    maxcust: 65,
    avgcust: 6.3,
    sales: [],
    getSales: function () {
        var rand = Math.random();
        var range = this.maxcust - this.mincust;
        var custhour = this.mincust + Math.floor(rand * range);
        return custhour;
    }
};
var tokyo = {
    name: 'tokyo',
    mincust: 3,
    maxcust: 24,
    avgcust: 1.2,
    sales: [],
    getSales: function () {
        var rand = Math.random();
        var range = this.maxcust - this.mincust;
        var custhour = this.mincust + Math.floor(rand * range);
        return custhour;
    }
};
var dubai = {
    name: 'dubai',
    mincust: 11,
    maxcust: 38,
    avgcust: 3.7,
    sales: [],
    getSales: function () {
        var rand = Math.random();
        var range = this.maxcust - this.mincust;
        var custhour = this.mincust + Math.floor(rand * range);
        return custhour;
    }
};
var paris = {
    name: 'paris',
    mincust: 20,
    maxcust: 38,
    avgcust: 2.3,
    sales: [],
    getSales: function () {
        var rand = Math.random();
        var range = this.maxcust - this.mincust;
        var custhour = this.mincust + Math.floor(rand * range);
        return custhour
    }
};
var lima = {
    name: 'lima',
    mincust: 2,
    maxcust: 16,
    avgcust: 4.6,
    sales: [],
    getSales: function () {
        var rand = Math.random();
        var range = this.maxcust - this.mincust;
        var custhour = this.mincust + Math.floor(rand * range);
        return custhour;
    }
};

function getsData(location) {
    for (var i = 0; i < times.length; i++) {
        var cookies = Math.ceil(location.getSales() * location.avgcust);
        location.sales[i] = times[i] + cookies;
    }
}



var times = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function datalocation(location) {
    var p = document.createElement('p');
    container.appendChild(p);
    var ul = document.createElement('ul');
    container.appendChild(ul);
    ul.textContent = location.name;
    for (var i = 0; i < times.length; i++) {
        var li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = times[i] + '$' +location.getSales();
    }
}


getsData(seattle);
getsData(tokyo);
getsData(dubai);
getsData(paris);
getsData(lima);

datalocation(seattle);
datalocation(tokyo);
datalocation(dubai);
datalocation(paris);
datalocation(lima);

