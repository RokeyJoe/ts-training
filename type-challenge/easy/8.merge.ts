type foo = {
  name: string;
  age: string;
};

type coo = {
  age: number;
  sex: string;
};

type Result = Merge<foo, coo>; // expected to be {name: string; age: number, sex: string}
type Merge<T, U> = {
  [P in Exclude<keyof T, keyof U>]: T[P];
} & {
  [G in keyof U]: U[G];
};

// Diff : 选出两个类型中不同属性
type diff1 = Diff<foo, coo>;
type Diff<T, V> = Omit<T & V, keyof T & keyof V>;

// PickByType: 按照类型选择
type OnlyBoolean = PickByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>;

type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P];
};

// RequiredByKeys: 按照 key 来设置成Require
interface User {
  name?: string;
  age?: number;
  address?: string;
}

type UserRequiredName = RequiredByKeys<User, "name">;

type RequiredByKeys<T, K> = Merge<
  Partial<Pick<T, Exclude<keyof T, K>>>,
  Required<Pick<T, Extract<keyof T, K>>>
>;

type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

// Mutable
interface Todo1 {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
}

type MutablTodo = Mutable<Todo1>;
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};
// Get Required
type I = GetRequired<{ foo: number; bar?: string }>;
type requiredKeys1 = RequiredKeys<{ foo: number; bar?: string }>;
// bar?: string => bar?: string | undefined, 若 T[P] 为可选， 则  T[P] extends Required<T>[P] 为 false
type GetRequired<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
};
type RequiredKeys<T> = keyof GetRequired<T>;

// Get Optional
type O = GetOptional<{ foo: number; bar?: string }>;
type optionalKeys1 = OptionalKeys<{ foo: number; bar?: string }>;

type GetOptional<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? never : P]: T[P];
};

type OptionalKeys<T> = keyof GetOptional<T>;
