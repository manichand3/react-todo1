import TodoItem from "./TodoItem";
export default function TodoList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </div>
  );
}
