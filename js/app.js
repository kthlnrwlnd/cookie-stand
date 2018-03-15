'use strict';

var hours =['6am', '7am', '8am','9am','10am','11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm', '7pm', '8pm'];

var firstAndPikeContainer = document.getElementById('first-and-pike');
var seaTacAirportContainer = document.getElementById('seatac-airport');
var seattleCenterContainer = document.getElementById('seattle-center');
var capitolHillContainer = document.getElementById('capitol-hill');
var alkiContainer = document.getElementById('alki');
// JS OBJECT LITERAL
var firstAndPike = {
// OBJECT PROPERTIES: minimum/ maximum customers per hour, and average cookie sales per customer
  minCustomer: 23,
  maxCustomer: 65,
  aveCookiePerCustomer: 6.3,
  hourlySales: [],
  // METHOD to generate a random number of customers per hour
  randomNumber: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },
  // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  generateSalesData: function() {
    for (var i = 0; i < hours.length; i++) {
      var estimatedNumberCookies = this.aveCookiePerCustomer * this.randomNumber();
      // Store the results for each location in a separate array...
      this.hourlySales.push(Math.round(estimatedNumberCookies));
    }
  },
  // Calculating the sum of these hourly totals
  render: function() {
    for (var i = 0; i < this.hourlySales.length; i++) {
      var listRow = document.createElement('li');
      listRow.textContent = hours[i] + ': ' + this.hourlySales [i] + '  cookies';
      firstAndPikeContainer.appendChild(listRow);
    }
  }
};
// Display the values of each array as unordered lists in the browser
firstAndPike.generateSalesData();
firstAndPike.render();

var seaTacAirport = {
  minCustomer: 3,
  maxCustomer: 24,
  aveCookiePerCustomer: 1.2,
  hourlySales: [],
  dailyTotal: 0,
  randomNumber: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },
  generateSalesData: function() {
    for (var i = 0; i < hours.length; i++) {
      var estimatedNumberCookies = this.aveCookiePerCustomer * this.randomNumber();
      this.hourlySales.push(Math.round(estimatedNumberCookies));
    }
  },
  render: function () {
    for (var i = 0; i < this.hourlySales.length; i++) {
      var listRow = document.createElement('li');
      listRow.textContent = hours[i] + ': ' + this.hourlySales [i] + '  cookies';
      this.dailyTotal += this.hourlySales[i];
      seaTacAirportContainer.appendChild(listRow);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.dailyTotal;
    seaTacAirportContainer.appendChild(total);
  }
};

seaTacAirport.generateSalesData();
seaTacAirport.render();
// start constructor function here



var seattleCenter = {
  minCustomer: 11,
  maxCustomer: 38,
  aveCookiePerCustomer: 3.7,
  hourlySales: [],
  dailyTotal: 0,
  randomNumber: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },
  generateSalesData: function() {
    for (var i = 0; i < hours.length; i++) {
      var estimatedNumberCookies = this.aveCookiePerCustomer * this.randomNumber();
      this.hourlySales.push(Math.round(estimatedNumberCookies));
    }
  },
  render: function() {
    for (var i = 0; i < this.hourlySales.length; i++) {
      var listRow = document.createElement('li');
      listRow.textContent = hours[i] + ': ' + this.hourlySales [i] + '  cookies';
      this.dailyTotal += this.hourlySales[i];
      seattleCenterContainer.appendChild(listRow);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.dailyTotal;
    seattleCenterContainer.appendChild(total);
  }
};

seattleCenter.generateSalesData();
seattleCenter.render();

var capitolHill = {
  minCustomer: 20,
  maxCustomer: 38,
  aveCookiePerCustomer: 2.3,
  hourlySales: [],
  dailyTotal: 0,
  randomNumber: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },
  generateSalesData: function() {
    for (var i = 0; i < hours.length; i++) {
      var estimatedNumberCookies = this.aveCookiePerCustomer * this.randomNumber();
      this.hourlySales.push(Math.round(estimatedNumberCookies));
    }
  },
  render: function() {
    for (var i = 0; i < this.hourlySales.length; i++) {
      var listRow = document.createElement('li');
      listRow.textContent = hours[i] + ': ' + this.hourlySales [i] + '  cookies';
      this.dailyTotal += this.hourlySales[i];
      capitolHillContainer.appendChild(listRow);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.dailyTotal;
    capitolHillContainer.appendChild(total);
  }
};

capitolHill.generateSalesData();
capitolHill.render();

var alki = {
  minCustomer: 2,
  maxCustomer: 16,
  aveCookiePerCustomer: 4.6,
  hourlySales: [],
  dailyTotal: 0,
  randomNumber: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer); 
  },
  generateSalesData: function() {
    for (var i = 0; i < hours.length; i++) {
      var estimatedNumberCookies = this.aveCookiePerCustomer * this.randomNumber();
      this.hourlySales.push(Math.round(estimatedNumberCookies));
    }
  },
  render: function () {
    for (var i = 0; i < this.hourlySales.length; i++) {
      var listRow = document.createElement('li');
      listRow.textContent = hours[i] + ': ' + this.hourlySales [i] + '  cookies';
      this.dailyTotal += this.hourlySales[i];
      alkiContainer.appendChild(listRow);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.dailyTotal;
    alkiContainer.appendChild(total);
  }
};

alki.generateSalesData();
alki.render();
// hours + ': ' + generateSalesData + 'cookies';



