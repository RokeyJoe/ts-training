type Fn = (a: number, b: string) => number;

type Result1 = AppendArgument<Fn, boolean>;

type AppendArgument<Fn extends (...args: any) => any, A> = Fn extends (
  ...args: infer Args
) => infer Res
  ? (...args: [...Args, A]) => Res
  : never;

// Append to object
type Test = { id: "1" };
type Result2 = AppendToObject<Test, "value", 4>;
// 2 点注意：
// 1. 判断 T 是否是 Record<string, any>， 要添加的key 是否是string
// 2. K extends U ? V : T[K] ， K 和 U 都是key，所以使用K extends U 判断是否是 T 的 key 还是新增的 key
type AppendToObject<T, U, V> = T extends Record<string, any>
  ? U extends string
    ? { [K in keyof T | U]: K extends U ? V : T[K] }
    : T
  : T;
