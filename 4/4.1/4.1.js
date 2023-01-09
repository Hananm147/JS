let numSibilngs = prompt("How many siblings do you have?");

if (+numSibilngs === 1) {
  console.log(`${numSibilngs} sibling!`);
} else if (+numSibilngs > 1) {
  console.log(`More than 1 sibling`);
} else {
  console.log(`No siblings`);
}
