'use strict';

var container = document.getElementById('stores');
var img = document.createElement('img');
img.setAttribute('src','img/salmon.png');
container.appendChild(img);

var article = document.createElement('article');
article.textContent = ' I am list';
container.appendChild(article);

var par = document.createElement('p');
par.textContent = 'price';
container.appendChild(par);


var times = ['6am:', '7am:', '8am:', '9am:', '10am:','11am:', '12pm', '1pm', '2pm', '3pm', '4pm','5pm', '6pm', '7pm'];

    for (var i = 0; i < times.length; i++){
        let h = i;
        let p = i;
    article.appendChild(document.createTextNode(times[i]));
    }
var seattle = {
    mincust: 23,
    maxcust: 65,
    avgcust: 6.3,
}
var hello = 0;

function getrandom(min, max){
    min = Math.ceil(23);
    max = Math.floor(65);
    hello = Math.floor(Math.random() * (max - min + 1)) + min;
    return hello;
}
var itstime = getrandom();
par.appendChild(document.createTextNode('$' + getrandom()));


console.log(getrandom);
var tokyo = {mincust: 3, maxcust: 24, avgcust: 1.2}
var dubai = {mincust: 11, maxcust: 38, avgcust: 3.7}
var paris = {mincust: 20, maxcust: 38, avgcust: 2.3}
var lima = {mincust: 2, maxcust: 16, avgcust: 4.6}