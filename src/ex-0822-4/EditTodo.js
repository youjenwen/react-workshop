function EditTodo({ editedTodo, setEditedTodo, updateTodo, v }) {
  return (
    <>
      <li>
        <input
          type="text"
          value={editedTodo}
          onChange={(e) => {
            setEditedTodo(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            //拷貝+改變目前這個資料的id的text, editing:false
            updateTodo(v.id, { text: editedTodo, editing: false });
          }}
        >
          儲存
        </button>
      </li>
    </>
  );
}

export default EditTodo;
