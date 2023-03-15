type arr1 = ["a", "b", "c"];
type arr2 = ["d", "e", "f"];
type arr3 = ["w", null];
type head1 = First<arr1>;
type last1 = Last<arr1>;
type pop1 = Pop<arr1>;
type push1 = Push<arr1, "d">;
type unshift1 = Unshift<arr1, "f">;
type shift1 = Shift<arr1>;
type concat1 = Concat<arr1, arr2>;
type reverse1 = Reverse<arr1>;
type filterout1 = FilterOut<[1], null>;

type First<T> = T extends [infer first, ...any[]] ? first : never;
type Last<T extends any[]> = T extends [...any[], infer last] ? last : never;
type Pop<T extends any> = T extends [...infer P, infer R] ? P : never;
type Push<T extends any[], P> = [...T, P];
type Unshift<T extends any[], P> = [P, ...T];
type Shift<T extends any[]> = T extends [infer P, ...infer R] ? R : undefined;
type Concat<T extends any[], V extends any[]> = [...T, ...V];
type Reverse<T> = T extends [infer Head, ...infer Rest]
  ? [...Reverse<Rest>, Head]
  : T;
// 只有一个元素时， 如: [1], T extends [infer First, ...infer Rest] 也为true， 此时Rest == []
type FilterOut<T extends any[], F> = T extends [infer First, ...infer Rest]
  ? First extends F
    ? FilterOut<Rest, F>
    : [First, ...FilterOut<Rest, F>]
  : [];
