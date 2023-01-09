function percentageOfWorld1(population) {
  let percentage = (population / 7900) * 100;
  return percentage;
}

let israel = percentageOfWorld1(9.3);
let france = percentageOfWorld1(42);
let italy = percentageOfWorld1(64);

console.log(israel, france, italy);

let percentageOfWorld2 = (population) => (population / 7900) * 100;

let israel1 = percentageOfWorld2(9.3);
let france1 = percentageOfWorld2(42);
let italy1 = percentageOfWorld2(64);

console.log(israel1, france1, italy1);
