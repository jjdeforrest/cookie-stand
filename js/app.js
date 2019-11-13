'use strict';

var times = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var container = document.getElementById('stores');
var img = document.createElement('img');
img.setAttribute('src', 'img/salmon.png');
container.appendChild(img);

function randomNumberOfCust(minAmount, maxAmount, average) {
  var randomPerCustomer = Math.floor(Math.random() * (maxAmount - minAmount + 1) + minAmount);
  return Math.floor(randomPerCustomer * average);
}

//  SETTING UP
var seattle = {
  name: 'seattle',
  mincust: 23,
  maxcust: 65,
  avgcust: 6.3,
  sales: [],
  totalcookies: 0,
};

for (var i = 0; i < times.length; i++) {
  seattle.sales.push(randomNumberOfCust(seattle.mincust, seattle.maxcust, seattle.avgcust));
}

for (var i = 0; i < seattle.sales.length; i++) {
  seattle.totalcookies += seattle.sales[i];
}

var article = document.createElement('article');
container.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = seattle.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for (var i = 0; i < times.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${times[i]} : ${seattle.sales[i]}`;
  ul.appendChild(li);
}

li.textContent = `Total ${seattle.totalcookies}`;
ul.appendChild(li);



var tokyo = {
  name: 'tokyo',
  mincust: 3,
  maxcust: 24,
  avgcust: 1.2,
  sales: [],
  totalcookies: 0,
}


for (var i = 0; i < times.length; i++) {
  tokyo.sales.push(randomNumberOfCust(tokyo.mincust, tokyo.maxcust, tokyo.avgcust));
}

for (var i = 0; i < tokyo.sales.length; i++) {
  tokyo.totalcookies += tokyo.sales[i];
}

var article = document.createElement('article');
container.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = tokyo.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for (var i = 0; i < times.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${times[i]} : ${tokyo.sales[i]}`;
  ul.appendChild(li);
}

li.textContent = `Total ${tokyo.totalcookies}`;
ul.appendChild(li);



var dubai = {
  name: 'dubai',
  mincust: 11,
  maxcust: 38,
  avgcust: 3.7,
  sales: [],
  totalcookies: 0,
};

for (var i = 0; i < times.length; i++) {
  dubai.sales.push(randomNumberOfCust(dubai.mincust, dubai.maxcust, dubai.avgcust));
}

for (var i = 0; i < dubai.sales.length; i++) {
  dubai.totalcookies += dubai.sales[i];
}

var article = document.createElement('article');
container.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = dubai.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for (var i = 0; i < times.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${times[i]} : ${dubai.sales[i]}`;
  ul.appendChild(li);
}

li.textContent = `Total ${dubai.totalcookies}`;
ul.appendChild(li);

var paris = {
  name: 'paris',
  mincust: 20,
  maxcust: 38,
  avgcust: 2.3,
  sales: [],
  totalcookies: 0,
};

for (var i = 0; i < times.length; i++) {
  paris.sales.push(randomNumberOfCust(paris.mincust, paris.maxcust, paris.avgcust));
}

for (var i = 0; i < paris.sales.length; i++) {
  paris.totalcookies += paris.sales[i];
}

var article = document.createElement('article');
container.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = paris.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for (var i = 0; i < times.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${times[i]} : ${paris.sales[i]}`;
  ul.appendChild(li);
}

li.textContent = `Total ${paris.totalcookies}`;
ul.appendChild(li);

var lima = {
  name: 'lima',
  mincust: 2,
  maxcust: 16,
  avgcust: 4.6,
  sales: [],
  totalcookies: 0,
};

for (var i = 0; i < times.length; i++) {
  lima.sales.push(randomNumberOfCust(lima.mincust, lima.maxcust, lima.avgcust));
}

for (var i = 0; i < lima.sales.length; i++) {
  lima.totalcookies += lima.sales[i];
}

var article = document.createElement('article');
container.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = lima.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for (var i = 0; i < times.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${times[i]} : ${lima.sales[i]}`;
  ul.appendChild(li);
}

li.textContent = `Total ${lima.totalcookies}`;
ul.appendChild(li);
