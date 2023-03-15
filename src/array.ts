const result = Promise.allSettled([
    Promise.resolve(33),
    Promise.resolve(),
    voidFn(),
    fn(),
    new Promise((resolve) => setTimeout(() => resolve(66), 0)),
    new Promise((resolve) => setTimeout(() => resolve(66), 1000)),
    99,
    Promise.reject(new Error("an error")),
  ]).then((values) => console.log(values));

console.log(result);

async function voidFn() {
    console.log(666)
}
async function fn() {
    return "Sorrow"
}

