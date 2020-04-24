export const digThang = "";

// Question 1

const timesThree = (num: number) => {
  return num * 3;
};

// const timesThreePrint = timesThree(3);

// console.log(timesThreePrint);

// // Question 2

// const eBecomesT = (firstSent: string) => {
//     return firstSent.replace ('e', 'ppp');
// };

// const eToTPhrase = "enormous entities encircle the earth";

// console.log (eBecomesT(eToTPhrase));

// Question 3

// const returnThirdNumb = (listNums: number[]) => {
//     return listNums[2] || null;
// };

// const arrayWithFour = [33, 55, 888, 3];
// const arrayWithTwo = [44, 66]

// console.log(returnThirdNumb(arrayWithFour));
// console.log(returnThirdNumb(arrayWithTwo));

// Question 4

const arrayOfTen: number[] = [22, 333, 444, 666, 7, 10, 12, 100, 65, 43];

// Question 5

const qFourTimesThree = arrayOfTen.map(timesThree);

console.log(qFourTimesThree);
