'use strict';

var container = document.getElementById('stores');
// var img = document.createElement('img');
// img.setAttribute('src','img/salmon.png');
// container.appendChild(img);




var times = ['6am:', '7am:', '8am:', '9am:', '10am:','11am:', '12pm', '1pm', '2pm', '3pm', '4pm','5pm', '6pm', '7pm'];

for (var i=0; i < times.length; i++){
    var timesopen = document.createElement('ul');
    timesopen.appendChild(document.createTextNode(times[i]));
    console.log(timesopen);
}
var seattle = {mincust:  23,maxcust: 65, avgcust: 6.3};

var tokyo = {mincust: 3, maxcust: 24, avgcust: 1.2};
var dubai = {mincust: 11, maxcust: 38, avgcust: 3.7};

var paris = {mincust: 20, maxcust: 38, avgcust: 2.3};

var lima = {mincust: 2, maxcust: 16, avgcust: 4.6};
