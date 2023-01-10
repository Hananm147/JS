function avg(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

let mikeTeam = avg([116, 94, 123]);
let johnTeam = avg([89, 120, 103]);
let maryTeam = avg([97, 134, 105]);

console.log(mikeTeam, johnTeam, maryTeam);

function winner(arr) {
  let max = [0, ""];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] > max[0]) {
      max[0] = arr[i][1];
      max[1] = arr[i][0];
    }
  }

  return max;
}

console.log(
  winner([
    ["mikeTeam", mikeTeam],
    ["johnTeam", johnTeam],
    ["maryTeam", maryTeam],
  ])
);
