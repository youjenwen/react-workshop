import { useState } from 'react';

function Todo() {
  const [inputValue, setInputValue] = useState('');
  const [editedTodo, setEditedTodo] = useState('');

  //代辦事項 範例
  //   {
  //     id: 1,
  //     text: '買牛奶',
  //     completed: false,
  //      editing: false (同時只能有一個ture)
  //   }
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '買牛奶',
      completed: false,
      editing: false,
    },
    {
      id: 2,
      text: '學React',
      completed: false,
      editing: false,
    },
  ]);

  const addTodo = (e) => {
    if (inputValue === '') return;

    if ((e.type === 'keydown' && e.type === 'Enter') || e.type === 'click') {
      const newObj = {
        id: +new Date(),
        text: inputValue,
        completed: false,
        editing: false,
      };
      const newTodos = [newObj, ...todos];
      setTodos(newTodos);

      //清空原本文字輸入
      setInputValue('');
    }
  };
  return (
    <>
      <h1>代辦事項</h1>
      <hr />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          //   console.log(e.target.value);
          setInputValue(e.target.value);
        }}
        onKeyDown={addTodo}
      />
      <button onClick={addTodo}>加入</button>
      <ul>
        {todos.map((v, i) => {
          if (v.editing) {
            return (
              <li key={v.id}>
                <input
                  type="text"
                  value={editedTodo}
                  onChange={(e) => {
                    setEditedTodo(e.target.value);
                  }}
                ></input>
                <button
                  onClick={() => {
                    const newTodos = todos.map((v2, i2) => {
                      return v2.id === v.id
                        ? { ...v2, text: editedTodo, editing: false }
                        : { ...v2 };
                    });
                    setTodos(newTodos);
                  }}
                >
                  儲存
                </button>
              </li>
            );
          }

          //key用i會有問題 不要養成習慣
          return (
            <li key={v.id}>
              {/* {v.text} */}
              <input
                type="checkbox"
                checked={v.completed}
                onChange={() => {
                  const newTodos = todos.map((v) => {
                    return { ...v };
                  });
                  //切換toggle true/false
                  newTodos[i].completed = !todos[i].completed;

                  setTodos(newTodos);
                }}
              />
              {v.completed ? <del>{v.text}</del> : v.text}
              <button
                onClick={() => {
                  // eslint-disable-next-line array-callback-return
                  //   console.log(e);
                  const newObj = todos.map((v) => {
                    return { ...v };
                  });

                  const newTodos = newObj.filter((v2, i2) => {
                    return v.id !== v2.id;
                  });
                  setTodos(newTodos);
                }}
              >
                刪除
              </button>
              <button
                onClick={() => {
                  // eslint-disable-next-line array-callback-return
                  //   console.log(e);

                  const newTodos = todos.map((v2, i2) => {
                    return v.id === v2.id
                      ? { ...v2, editing: true }
                      : { ...v2, editing: false };
                  });
                  setTodos(newTodos);

                  setEditedTodo(v.text);
                }}
              >
                編輯
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
