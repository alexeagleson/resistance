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
  if (num >= 100) {
    return true;
  }
  return false;
});
console.log(arrayGreaterHun);

// Question 7
const typeTelling = (userInput: any) => {
  if (typeof userInput === `number`) {
    return "This is def a number";
  } else if (typeof userInput === `object`) {
    return "This is prob an array";
  } else if (typeof userInput === `string`) {
    return "Totes a string";
  }
  return "What the heck is that";
};

console.log(typeTelling("5"));
console.log(typeTelling(arrayOfTen));
console.log(typeTelling(5));
console.log(typeTelling(typeTelling));

// Question 8
export interface Product {
  name: string;
  department: string;
  sku: number;
  ingredients: string[];
}

// Question 9
export interface Store {
  name: string;
  address: string;
  city: string;
  departments: string[];
  storenum: number;
  products: Product[];
}

// Question 10
const bun: Product = {
  name: " a hot bag of buns",
  department: " Bakery",
  sku: 8003,
  ingredients: [" flour", " yeast", " salt"],
};

const corn: Product = {
  name: " sweet corn",
  department: " Produce",
  sku: 8004,
  ingredients: [" corn"],
};

const chip: Product = {
  name: " salty chips",
  department: " Snack",
  sku: 8005,
  ingredients: [" potato", " oil", " more salt"],
};

const store1: Store = {
  name: `Bilky Bob\'s`,
  address: `34 Bob St`,
  city: `Bilkerton`,
  departments: ["bakery ", "produce ", "snacks ", "health "],
  storenum: 44,
  products: [chip, corn, bun],
};

const aboutStore = (store: Store) => {
  return `Welcome to ${store.name}, where everyone in ${
    store.city
  } goes to buy food. You will find amazing things like${store.products.map(
    (product) => {
      return `${product.name}`;
    }
  )} that are teeming with${store.products.map((product) => {
    return `${product.ingredients} `;
  })} from the ${store.products.map((product) => {
        return `${product.department}`;
      })} departments just as you were destined to do.`;
};

console.log(aboutStore(store1));
