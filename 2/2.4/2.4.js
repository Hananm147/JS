function today() {
  let date = new Date();
  let day = date.toLocaleString("en-us", { weekday: "long" });
  let month = date.toLocaleString("en-us", { month: "long" });
  let dateNum = date.getDate();
  let year = date.getFullYear();

  return `Today is ${day}, the ${dateNum}th of ${month} ${year}`;
}

console.log(today());
