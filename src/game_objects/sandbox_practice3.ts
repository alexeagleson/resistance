export const dingdong = ``;

interface FakePromise {
  then: (x: () => void) => void;
}

const dog: FakePromise = {
  then: (x) => {
    x();
    x();
  },
};

dog.then(() => {
  console.log(`hello`);
});
console.log(`goodbye`);

const cat = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve(`dinner is ready`);
  }, 2000);
  setTimeout(() => {
    reject(`fuck you i MADE dinner`);
  }, 3000);

});

cat
  .then((greeting) => {
    console.log(greeting);
  })
  .catch((err: string) => {
    console.log(err);
  });
console.log(`mouse hair bottle`);
