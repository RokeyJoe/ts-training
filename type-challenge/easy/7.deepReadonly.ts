type X = {
  y: "hey";
  x: {
    a: 1;
    b: "hi";
  };
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type Todo = DeepReadonly<X>;

// keyof T[P] extends never 这种方式判断是否有子属性，可以完成深度遍历
type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>;
};
