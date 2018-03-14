var hours =['6am', '7am', '8am','9am','10am','11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm', '7pm', '8pm']

var firstAndPikeContainer = document.getElementById('first-and-pike')
var seaTacAirportContainer = document.getElementById('seatac-airport')
var seattleCenter = document.getElementById('seattle-center')
var capitolHill = document.getElementById('capitolHill')
var alki = document.getElementById('alki')

var firstAndPike = {
  minCustomer: 23,
  maxCustomer: 65,
  aveCookiePerCustomer: 6.3,
  hourlySales: [],
  randomNumber: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    }
  }

  generateSalesData: function() {
    for (var i = 0; i < hours.length; i++) {
      var estimatedNumberCookies = this.aveCooliePerCustomer * this.randomNumber();
    }
  }

var seaTacAirport = {
  minCustomer: 3,
  maxCustomer: 24,
  aveCookiePerCustomer: 1.2,
  hourlySales: [],
  randomNumber: function() {
 return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  }
}
  generateSalesData: function() {
    for (var i = 0; i < hours.length; i++) {
      var estimatedNumberCookies = this.aveCookiePerCustomer * this.randomNumber();
    }
  }


var seattleCenter = {
  minCustomer: 11,
  maxCustomer: 38,
  aveCookiePerCustomer: 3.7,
  hourlySales: [],
  randomNumber: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },
  generateSalesData: function() {
   for (var i = 0; i < hours.length; i++) {
     var estimatedNumberCookies = this.aveCookiePerCustomer * this.randomNumber();
   }
  }

var capitolHill = {
  minCustomer: 20,
  maxCustomer: 38,
  aveCookiePerCustomer: 2.3,
  hourlySales: [],
  randomNumber: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
  },
  generateSalesData: function() {
    for (var i = 0; i < hours.length; i++) {
      var estimatedNumberCookies = this.aveCookiePerCustomer * this.randomNumber();
    }
  }
}

var alki = {
  minCustomer: 2,
  maxCustomer: 16,
  aveCookiePerCustomer: 4.6,
  hourlySales: [] ,
  randomNumber: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer); 
  },
  generateSalesData: function() {
    for (var i = 0; i < hours.length; i++) {
      var estimatedNumberCookies = this.aveCookiePerCustomer * this.randomNumber();
      this.hourlySales.push(estimatedNumberCookies);
    }
  },

var listRow = document.createElement('li');
listRow.textContent = 16
firstAndPikeContainer.appendChild(listRow)

}
