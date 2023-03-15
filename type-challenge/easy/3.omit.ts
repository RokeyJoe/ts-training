interface Todo {
    title: string
    description: string
    completed: boolean
  }
  type MyOmit<T, K> = Pick<T, Exclude<keyof T, K>>
  type TodoPreview = MyOmit<Todo, 'description' | 'title'>
  
  const todo: TodoPreview = {
    completed: false,
  }

  console.log(todo);