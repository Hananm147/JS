const people = ["Greg", "Mary", "Devon", "James"];
//1
for (let i = 0; i <= 3; i++) {
  console.log(people[i]);
}
//2
people.shift("Greg");
//3
people.pop("James");
//4
people.unshift("Matt");
//5
people.push("Hananya");
//6
for (let i = 0; i <= 3; i++) {
  console.log(people[i]);
}
//7
let people1 = people.slice(0, 2);
console.log(people1);
