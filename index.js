// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}
 function returnLastTwoDrivers(drivers) {
  return drivers.slice(- 2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers)

function createFareMultiplier (distance,){
  let fare  = 50 ;
  return function (fare){
    return distance * fare
  }
}
console.log(createFareMultiplier(5, fare))

function fareDoubler(fare){
    return fare * 2;
}

function fareTripler(fare){
  return fare * 3;
}
function selectDifferentDrivers(drivers, selectDrivers){
  return selectDrivers(drivers);
  
}

