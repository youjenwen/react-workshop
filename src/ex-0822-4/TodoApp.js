import { useState } from 'react';
import FormAdd from './AddTodo';
import EditTodo from './EditTodo';
import TodoItem from './TodoItem';

function TodoApp() {
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
      <FormAdd
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTodo={addTodo}
      />
      <ul>
        {todos.map((v, i) => {
          if (v.editing) {
            return (
              <EditTodo
                key={v.id}
                editedTodo={editedTodo}
                setEditedTodo={setEditedTodo}
                updateTodo={updateTodo}
                v={v}
              />
            );
          }

          return (
            <TodoItem
              key={v.id}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              v={v}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoApp;
