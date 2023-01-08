function countryInfo(country, population, capitalCity) {
  return `${country} has ${population} millions people and its capital city is ${capitalCity}`;
}
let israel = countryInfo("Israel", 9, "Jerusalem");
let france = countryInfo("France", 60, "Paris");
let jordan = countryInfo("Jordan", 7, "Amman");

console.log(israel);
console.log(france);
console.log(jordan);
