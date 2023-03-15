interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type MyPick<T, K extends keyof T> = { [N in K]: T[N] };

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};


console.log(todo);