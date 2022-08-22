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
      //建立要加入的新物件
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

  //刪除
  //params: id 目前要刪除的資料id
  const deleteTodo = (id) => {
    const newTodos = todos.filter((v2, i2) => {
      return id !== v2.id;
    });

    setTodos(newTodos);
  };

  //更新
  // params:
  // id 目前要更新的資料id
  // valueObject: object  ex. { text:'abc' }
  const updateTodo = (id, valueObject) => {
    const newTodos = todos.map((v2, i2) => {
      return id === v2.id ? { ...v2, ...valueObject } : { ...v2 };
    });
    setTodos(newTodos);
  };

  //編輯(還沒看)
  const editTodo = (id, text) => {
    // 拷貝出目前所有todos狀態
    // 將所有其它的項目editing設為false
    // 將目前的項目editing設為true
    const newTodos = todos.map((v2, i2) => {
      return id === v2.id
        ? { ...v2, editing: true }
        : { ...v2, editing: false };
    });

    setTodos(newTodos);

    // 將editedTodo設為v.text，準備進行編輯
    setEditedTodo(text);
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
                    //拷貝+改變目前這個資料的id的text, editing:false
                    updateTodo(v.id, { text: editedTodo, editing: false });
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
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
