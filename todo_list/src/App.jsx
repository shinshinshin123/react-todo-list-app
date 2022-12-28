import React from "react";
import { useState } from "react";

export const App = () => {
    const [todoValue, setTodoValue] = useState('')

    //todoの追加機能
    const [addTodos, setAddTodos] = useState(['ああああ', 'いいいい']);

    const onChangeTodoValue = (e) => setTodoValue(e.target.value);

    const onClickAdd = () => {
        if (todoValue === "") return;
        const createTodos = [...addTodos, todoValue];
        setAddTodos(createTodos);
        setTodoValue('');
    };

    const onClickDelete = (index) => {
        const createTodos = [...addTodos];
        createTodos.splice(index, 1);
        setAddTodos(createTodos);
    };

    return (
    <>
      <div className="todo-area">
        <h1>TODOリスト</h1>
        <input placeholder="TODOを入力する" value={todoValue} onChange={onChangeTodoValue} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="not-complete-area">
        <h2>todo一覧</h2>
        {addTodos.map((todo, index) => {
            return (
               <div key={todo} className="todo-list">
                  <li>{todo}</li>
                  <button onClick={() => onClickDelete(index)}>削除</button>
               </div>
            );
        })}
      </div>
    </>
  );
};
