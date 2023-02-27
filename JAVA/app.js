const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const tableElement = document.getElementById('sales-table');

function CookieStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {

 this.locationName = locationName;

 this.minCustomersPerHour = minCustomersPerHour;

 this.maxCustomersPerHour = maxCustomersPerHour;

 this.avgCookiesPerSale = avgCookiesPerSale;

 this.customersEachHour = [];

 this.cookiesEachHour = [];

 this.totalDailyCookies = 0;

 this.push[CookieStand.all]

}
CookieStand.prototype.calcCustomersEachHour = function() {


 for (let i = 0; i < hours.length; i++) {


   this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
 }
};
CookieStand.prototype.calcCookiesEachHour = function() {

 CookieStand.all.push[this]

 this.calcCookiesEachHour[this];

 for (let i = 0; i < hours.length; i++) {


   const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);


   this.cookiesEachHour.push(oneHour);


   this.totalDailyCookies += oneHour;


 }


};
CookieStand.prototype.render = function() {
 // TODO: generate the calculation of customers each hour here

 this.calcCookiesEachHour();
 const tableRow = document.createElement('tr');
 let tableDataElement = document.createElement('td');
 tableDataElement.textContent = this.locationName;


 tableRow.appendChild(tableDataElement);

 for (let i = 0; i < hours.length; i++) {

   tableDataElement = document.createElement('td');

   tableDataElement.textContent = this.cookiesEachHour[i];

   tableRow.appendChild(tableDataElement);
 }
 const tableHeaderElement = document.createElement('th');

 tableHeaderElement.textContent = this.totalDailyCookies;

 tableRow.appendChild(tableHeaderElement);

 tableElement.appendChild(tableRow);
};
CookieStand.all = [];
new CookieStand(seattle, 3, 10, 4.5);
new CookieStand(tokyo, 12, 20, 22);
new CookieStand (dubai, 2, 500, 3.5);
new CookieStand(prineville, 11, 2, 5);
function random(min, max) {

 return Math.floor(Math.random() * (max - min + 1)) + min;

function makeHeaderRow() {

 const tableRow = document.createElement('tr');

 let tableHeaderElement = document.createElement('th');

 tableHeaderElement.textContent = 'Locations';

 tableRow.appendChild(tableHeaderElement);

 for (let i = 0; i < hours.length; i++) {

   tableHeaderElement = document.createElement('th');

   tableHeaderElement.textContent = hours[i];

   tableRow.appendChild(tableHeaderElement);
 }
 tableHeaderElement = document.createElement('th');

 tableHeaderElement.textContent = 'Location Totals';

 tableRow.appendChild(tableHeaderElement);

 tableElement.appendChild(tableRow);

}
function makeFooterRow() {

 const tableRow = document.createElement('tr');

 let tableHeaderElement = document.createElement('th');

 tableHeaderElement.textContent = 'Hourly Totals for All Locations';

 tableRow.appendChild(tableHeaderElement);

 let totalOfTotals = 0;

 for (let i = 0; i < hours.length; i++) {

   let hourlyTotal = 0;

   for (const j = 0; j < CookieStand.all.length; j++){

     hourlyTotal += CookieStand.all[j].cookiesEachHour[i];

     totalOfTotals += CookieStand.all[j].cookiesEachHour[i];
   }
   tableHeaderElement = document.createElement('th');

   tableHeaderElement.textContent = hourlyTotal;

   tableRow.appendChild(tableHeaderElement);
 }
 tableHeaderElement = document.createElement('th');

 tableHeaderElement.textContent = totalOfTotals;

 tableRow.appendChild(tableHeaderElement);

 tableElement.appendChild(tableRow);

}
(function renderTable() {

 makeHeaderRow();

 for(let i = 0; i < CookieStand.all.length; i++){

   CookieStand.all[i].render();
 }
 makeFooterRow();

})();

// make some waves.
var ocean = document.getElementById("ocean"),
    waveWidth = 10,
    waveCount = Math.floor(window.innerWidth/waveWidth),
    docFrag = document.createDocumentFragment();

for(var i = 0; i < waveCount; i++){
  const wave = document.createElement("div");
  wave.className += " wave";
  docFrag.appendChild(wave);
  wave.style.left = i * waveWidth + "px";
  wave.style.webkitAnimationDelay = (i/100) + "s";
}

ocean.appendChild(docFrag);