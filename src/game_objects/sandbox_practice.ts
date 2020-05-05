export const digThang = "";

// // Question 1

// const timesThree = (num: number) => {
//   return num * 3;
// };

// // const timesThreePrint = timesThree(3);

// // console.log(timesThreePrint);

// // // Question 2

// // const eBecomesT = (firstSent: string) => {
// //     return firstSent.replace ('e', 'ppp');
// // };

// // const eToTPhrase = "enormous entities encircle the earth";

// // console.log (eBecomesT(eToTPhrase));

// // Question 3

// // const returnThirdNumb = (listNums: number[]) => {
// //     return listNums[2] || null;
// // };

// // const arrayWithFour = [33, 55, 888, 3];
// // const arrayWithTwo = [44, 66]

// // console.log(returnThirdNumb(arrayWithFour));
// // console.log(returnThirdNumb(arrayWithTwo));

// // Question 4

// const arrayOfTen: number[] = [22, 333, 444, 666, 7, 10, 12, 100, 65, 43];

// // Question 5

// // const qFourTimesThree = arrayOfTen.map(timesThree);

// // console.log(qFourTimesThree);

// // Question 6

// // const arrayGreaterThanOneHun: number[] = arrayOfTen.filter((num) => {
// //   if (num >= 100) {
// //     return true;
// //   }
// //   return false;
// // });

// // console.log(arrayGreaterThanOneHun);

// // Question 7

// // const aboutYourInput = (userInput: any) => {
// //   if (typeof userInput === "string") {
// //     return "It is a string";
// //   } else if (typeof userInput === "number") {
// //     return "It is a number";
// //   } else if (typeof userInput === "object") {
// //     return "It is an array";
// //   }
// //   return "I don\'t know what this is";
// // };

// // console.log(aboutYourInput("I am a dog"));
// // console.log(aboutYourInput(3 + 3));
// // console.log(aboutYourInput([4, 5, 6]));
// // console.log(aboutYourInput(undefined));

// // Question 8

// interface GroceryProduct {
//   name: string;
//   SKU: number;
//   color: string;
// }

// interface GroceryStore {
//   name: string;
//   storeNumber: number;
//   productsForSale: GroceryProduct[];
//   city: string;
// }

// const pepper: GroceryProduct = {
//   name: "pepper",
//   SKU: 38938383,
//   color: "green",
// };

// const cucumber: GroceryProduct = {
//   name: "cucumber",
//   SKU: 3857555,
//   color: "green",
// };

// const yam: GroceryProduct = {
//   name: "Sweet Potato",
//   SKU: 3988888,
//   color: "orange",
// };

// const frills: GroceryStore = {
//   name: "Just Frills",
//   storeNumber: 1,
//   productsForSale: [pepper, cucumber, yam],
//   city: "Norworld",
// };

// const aboutStore = (store: GroceryStore) => {
//   return `At ${store.name}, you can buy ${store.productsForSale.map((product)=>{
//     return `${product.color} ${product.name}s`
//   })} in the beautiful town of ${store.city}.`;
// };

// console.log("Tell me about Just Frills, please. ", aboutStore(frills));

// const sortedArrayOfTen = arrayOfTen.sort((a, b) => {
//   if (a > b) {return 1}
//   return -1
// })

// console.log(sortedArrayOfTen )
// // ['dsdsd', 'sadsa'].sort((a, b) => {})