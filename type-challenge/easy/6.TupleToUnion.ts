type Arr = ['1','2','3'];
type test = TupleToUnion<Arr>
type TupleToUnion<T extends any[]> = T[number]