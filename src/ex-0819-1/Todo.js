import { useState } from 'react';

function Todo() {
  const [inputValue, setInputValue] = useState('');

  //代辦事項 範例
  //   {
  //     id: 1,
  //     text: '買牛奶',
  //     completed: false,
  //   }
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '買牛奶',
      completed: false,
    },
    {
      id: 2,
      text: '學React',
      completed: false,
    },
  ]);

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
        onKeyDown={(e) => {
          //如果輸入為空 就中斷
          if (inputValue === '') return;
          //   console.log(e, e.key); //有enter事件
          //如果按下enter鍵 把inputValue塞進todos陣列最前面
          if (e.key === 'Enter') {
            //1.從目前狀態拷貝出一個新的變數值(陣列/物件)
            //2.在新的變數值(陣列/物件)上作處理
            //3.設定回原本狀態中
            const newObj = { id: +new Date(), text: inputValue };

            const newTodos = [newObj, ...todos];
            setTodos(newTodos);

            //清空原本文字輸入
            setInputValue('');
          }
        }}
      />
      <button
        onClick={() => {
          if (inputValue === '') return;
          const newObj = { id: +new Date(), text: inputValue };
          const newTodos = [newObj, ...todos];
          setTodos(newTodos);

          //清空原本文字輸入
          setInputValue('');
        }}
      >
        加入
      </button>
      <ul>
        {todos.map((v, i) => {
          //key用i會有問題 不要養成習慣
          return (
            <li key={v.id}>
              {/* {v.text} */}
              <input
                type="checkbox"
                checked={v.completed}
                onClick={() => {
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
                  //index其實可以不用找 直接用上面的i即可
                  //   const index = todos.findIndex((v2, i2) => {
                  //     return v.id === v2.id;
                  //   });

                  //   if (index !== -1) {

                  //   }
                  //拷貝一個新的todos
                  const newTodos = todos.map((v) => {
                    return { ...v };
                  });
                  //切換toggle true/false
                  newTodos[i].completed = !todos[i].completed;

                  setTodos(newTodos);
                }}
              >
                {v.completed ? '已完成' : '尚未完成'}
              </button>
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
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
