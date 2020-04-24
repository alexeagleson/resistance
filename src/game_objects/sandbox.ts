export const dagThung = '';
// import { stringify } from "querystring";

// // Lesson 2: April 19th ///////////////////////////////////////////////////

// type BuildingType = "Office" | "Call Center" | "Nuclear Power Plant";
// type District = "Ontario" | "Space";

// // interfaces /////////////////////////////////////////////////////////////

// export interface Employee {
//   name: string;
//   employeeID: number;
//   isManager: boolean;
//   favouriteFood: string | undefined;
// }

// export interface Workplace {
//   location: string;
//   officeCode: number;
//   company: string;
//   buildingType: BuildingType;
//   district: District;
//   employees: Employee[];
// }

// // const foodChange = (food: Employee) => {
// //   if (food.favouriteFood != undefined) {
// //     return food.favouriteFood.replace('pasta', 'vegetable')
// //   }
// // };

// const filterOnFunct = (workplace: Workplace) => {
//   if (workplace.district === "Ontario") {
//     return true;
//   }
//   return false;
// };

// // const ontarioLocList = (onLoc: string): string[] => {
// //   const locationList = onLoc.filter(",");
// //   return [String(locationList[0])];
// // };

// console.log("hello");

// // list of employee objects /////////////////////////////////////////////////

// const jodie: Employee = {
//   name: "Jodie",
//   employeeID: 1,
//   isManager: true,
//   favouriteFood: "Goat Cheese",
// };

// const alex: Employee = {
//   name: "Alex",
//   employeeID: 2,
//   isManager: true,
//   favouriteFood: "Pizza",
// };

// const madelyn: Employee = {
//   name: "Madelyn",
//   employeeID: 3,
//   isManager: false,
//   favouriteFood: "Lots of Pasta",
// };

// const bob: Employee = {
//   name: "Bob",
//   employeeID: 4,
//   isManager: false,
//   favouriteFood: undefined,
// };

// const todd: Employee = {
//   name: "Todd",
//   employeeID: 5,
//   isManager: false,
//   favouriteFood: "Peanut Butter",
// };

// const steve: Employee = {
//   name: "Steve",
//   employeeID: 6,
//   isManager: false,
//   favouriteFood: undefined,
// };

// const frank: Employee = {
//   name: "Frank",
//   employeeID: 7,
//   isManager: false,
//   favouriteFood: undefined,
// };

// const fred: Employee = {
//   name: "Fred Johnson",
//   employeeID: 8,
//   isManager: true,
//   favouriteFood: undefined,
// };

// const billy: Employee = {
//   name: "Billy Snow",
//   employeeID: 9,
//   isManager: true,
//   favouriteFood: "Space Food",
// };

// const dog: Employee = {
//   name: "A Dog",
//   employeeID: 10,
//   isManager: true,
//   favouriteFood: "Dog Food",
// };

// const tony: Employee = {
//   name: "Tony Hawk",
//   employeeID: 11,
//   isManager: false,
//   favouriteFood: "Corn Dogs",
// };

// const crozier: Employee = {
//   name: "Captain Crozier",
//   employeeID: 12,
//   isManager: true,
//   favouriteFood: "Lead Poisoning",
// };

// // list of workplaces ///////////////////////////////////////////////////////

// const peterborough: Workplace = {
//   location: "Peterborough",
//   officeCode: 111,
//   company: "Hydro One",
//   buildingType: "Office",
//   district: "Ontario",
//   employees: [jodie, dog],
// };

// const jupiter: Workplace = {
//   location: "Jupiter",
//   officeCode: 222,
//   company: "Hydro One",
//   buildingType: "Office",
//   district: "Space",
//   employees: [alex, crozier, tony],
// };

// const orillia: Workplace = {
//   location: "Orillia",
//   officeCode: 333,
//   company: "Hydro One",
//   buildingType: "Call Center",
//   district: "Ontario",
//   employees: [madelyn],
// };

// const fowlersCorners: Workplace = {
//   location: "Fowler's Corners",
//   officeCode: 444,
//   company: "Hydro One",
//   buildingType: "Call Center",
//   district: "Ontario",
//   employees: [bob],
// };

// const hastings: Workplace = {
//   location: "Hastings",
//   officeCode: 555,
//   company: "Hydro One",
//   buildingType: "Nuclear Power Plant",
//   district: "Ontario",
//   employees: [todd],
// };

// const fenelonFalls: Workplace = {
//   location: "Fenelon Falls",
//   officeCode: 666,
//   company: "Hydro One",
//   buildingType: "Nuclear Power Plant",
//   district: "Ontario",
//   employees: [steve],
// };

// const theMoon: Workplace = {
//   location: "The Moon",
//   officeCode: 777,
//   company: "Hydro One",
//   buildingType: "Call Center",
//   district: "Space",
//   employees: [frank],
// };

// const theBelt: Workplace = {
//   location: "The Belt",
//   officeCode: 888,
//   company: "Hydro One",
//   buildingType: "Office",
//   district: "Space",
//   employees: [fred],
// };

// const pluto: Workplace = {
//   location: "Pluto",
//   officeCode: 999,
//   company: "Hydro One",
//   buildingType: "Nuclear Power Plant",
//   district: "Space",
//   employees: [billy],
// };

// const workplaces = [
//   peterborough,
//   jupiter,
//   orillia,
//   fowlersCorners,
//   hastings,
//   fenelonFalls,
//   theMoon,
//   theBelt,
//   pluto,
// ];

// const employees = [
//   jodie,
//   alex,
//   madelyn,
//   bob,
//   todd,
//   steve,
//   frank,
//   fred,
//   billy,
//   tony,
//   crozier,
// ];

// const favouriteFoods: Array<string> = employees.map((employee) => {
//   return (
//     employee.favouriteFood?.toLowerCase() ||
//     "doesn't like food or empty string would have been fine too"
//   );
// });

// const foodFixer = (food: string) => {
//   return food.replace("Pasta", "Vegetable");
// };

// if (typeof madelyn.favouriteFood === "string") {
//   console.log(foodFixer(madelyn.favouriteFood));
// }

// const includesWord = (wordSearch: string, wordList: string[]) => {
//   if (wordList.includes(wordSearch)) {
//     return "someone is so cool, they like pizza";
//   }
//   return "word not found";
// };

// const tonyHawksWorkplace = workplaces.find((workplace) => {
//   const probablyTony = workplace.employees.find((employee) => {
//     if (employee.name.toLowerCase() === "tony hawk") {
//       return true
//     }
//     return false;
//   }); 
//   if (probablyTony === undefined) {
//     return false;
//   }
//     return true;
// });

// console.log(tonyHawksWorkplace?.location);

// console.log(includesWord("pizza", favouriteFoods));

// console.log(madelyn.favouriteFood);

// const ontarioWorkplaces = workplaces.filter(filterOnFunct);

// ontarioWorkplaces.forEach((workplace) => {
//   console.log(
//     `The ${workplace.location} location has ${workplace.employees.length} ${
//       workplace.employees.length > 1 ? "employees" : "employee"
//     }.`
//   );
// });

// console.log(ontarioWorkplaces);

// // Lesson 1: April 17th

// const treeString = "tree";
// const treeArray = ["flower", "fern", "rock"];

// treeArray.push(treeString);
// // console.log(treeArray);

// const myHouse = {
//   streetAddress: 48,
//   streetName: "Oak",
//   numberOfOccupants: 3,
//   thingsInGarden: treeArray,
//   upstairs: {
//     hasBathroom: true,
//     hasOilRoom: false,
//     hasKitchen: true,
//   },
//   downstairs: {
//     hasBathroom: false,
//     hasOilRoom: true,
//     hasKitchen: false,
//   },
// };

// const isCoolKid = (kid: string) => {
//   if (kid === "Madelyn") {
//     return "Cool Kid";
//   }
//   return "Uncool Kid";
// };

// const fiveNumbers = [1, 2, 45, 66, 77];
// const doubleFiveNumbers = fiveNumbers.map((oneNumber) => {
//   return oneNumber * 2;
// });

// // console.log(doubleFiveNumbers);
// // console.log(isCoolKid('Madelryn'));
// // console.log(myHouse);
// // console.log("My downstairs has a kitchen: " + myHouse.downstairs.hasKitchen);
// // console.log(`My upstairs has an oil room: ${myHouse.upstairs.hasOilRoom}`);
export const dogThank = {};
