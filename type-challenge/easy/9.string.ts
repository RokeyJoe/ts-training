type trimed = TrimLeft<" Hello World ">;
type trimAll = Trim<" Hello World ">;

type Space = " " | "\n" | "\t";
type TrimLeft<S extends string> = S extends `${Space}${infer Rest}`
  ? TrimLeft<Rest>
  : S;
type Trim<S extends string> = S extends `${Space}${infer Rest}${Space}`
  ? Trim<Rest>
  : S;

type Replaced = Replace<"types are fun!", "fun", "awesome">;
type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer Left}${From}${infer Right}`
  ? `${Left}${To}${Right}`
  : S;

// 近似Replace, 替换全部
type repalceAll1 = ReplaceAll<"t y p e s", " ", "">;
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer Left}${From}${infer Right}`
  ? `${Left}${To}${ReplaceAll<Right, From, To>}`
  : S;

// Drop Char
type Bufferfly = DropChar<" b u f f e r f l y ! ", " ">;

type DropChar<S extends string, C extends string> = C extends ""
  ? S
  : S extends `${infer Left}${C}${infer Right}`
  ? `${Left}${DropChar<Right, C>}`
  : S;

// ParseInt： 字符串转数字
type number1 = ParseInt<"1">
type ParseInt<T extends string> = T extends `${infer Digit extends number}`
  ? Digit
  : never;
