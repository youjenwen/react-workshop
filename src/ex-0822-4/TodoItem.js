function TodoItem({ updateTodo, deleteTodo, editTodo, v }) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={v.completed}
          onChange={() => {
            updateTodo(v.id, { completed: !v.completed });
          }}
        />
        {v.completed ? <del>{v.text}</del> : v.text}
        <button
          onClick={() => {
            deleteTodo(v.id);
          }}
        >
          刪除
        </button>
        <button
          onClick={() => {
            editTodo(v.id, v.text);
          }}
        >
          編輯
        </button>
      </li>
    </>
  );
}

export default TodoItem;
