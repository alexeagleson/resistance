export const dugThing = "";

// Question 1
const timesThree = (num: number) => {
  return num * 3;
};

// Question 2
const eChanger = (string: string) => {
  return string.toLowerCase().replace("e", "t");
};

console.log(eChanger("Eeny teeny weiny"));

// Question 3
const threeElArray = [`one`, `three`, `five`];
const twoElArray = [`one`, `three`];

const returnThirdEl = (el: any) => {
  return el[2] || null;
};

console.log(returnThirdEl(threeElArray));
console.log(returnThirdEl(twoElArray));

// Question 4
const arrayOfTen = [4, 5, 9999, 99, 0, 293, 10, 23, 553, 335];

// Question 5

const arrayOfTenXThree = arrayOfTen.map(timesThree);
console.log(arrayOfTenXThree);

// Question 6
const arrayGreaterHun = arrayOfTen.filter((num) => {
  if (num >= 100) {return true}
  return false
});
console.log(arrayGreaterHun);

// Question 7
const typeTelling = (userInput: any) => {
  if (typeof userInput === `number`) {return "This is def a number"}
  else if (typeof userInput === `object`) {return "This is prob an array"}
  else if (typeof userInput === `string`) {return "Totes a string"}
  return "What the heck is that";
};

console.log(typeTelling("5"));
console.log(typeTelling(arrayOfTen));
console.log(typeTelling(5));
console.log(typeTelling(typeTelling));
