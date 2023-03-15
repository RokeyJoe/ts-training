const list = [1, 2, 3];
Promise.allSettled(
  list.map(
    (item) => new Promise((resolve) => setTimeout(() => resolve(item), 1000))
  )
).then((values) => console.log(values));

Promise.allSettled(list.map((item) => Promise.resolve(item))).then((values) =>
  console.log(values)
);

Promise.allSettled(list.map((item) => fn())).then((values) =>
  console.log(values)
);


async function fn() {
    console.log(123)
}