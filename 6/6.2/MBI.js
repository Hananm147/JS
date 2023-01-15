const markWeight = 78;
const markHeight = 1.69;
const markBmi = (markWeight / markHeight) ** 2;

const johnWeight = 95;
const johnHeight = 1.88;
const johnBmi = (johnWeight / johnHeight) ** 2;

const markHigherBmi = markBmi > johnBmi;

if (markBmi > johnBmi) {
  console.log(
    `mark's BMI ${markBmi.toFixed(1)} is higher than john's ${johnBmi.toFixed(
      1
    )}`
  );
} else {
  console.log(
    `john's BMI ${johnBmi.toFixed(1)} is higher than mark's ${markBmi.toFixed(
      1
    )}`
  );
}
