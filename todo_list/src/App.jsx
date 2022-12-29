import React from "react";
import { useState } from "react";

export const App = () => {
    const [todoValue, setTodoValue] = useState('')

    //todoの追加
    const [addTodos, setAddTodos] = useState(['']);

    const onChangeTodoValue = (e) => setTodoValue(e.target.value);

    const onClickAdd = () => {
        if (todoValue === "") return;
        const createTodos = [...addTodos, todoValue];
        setAddTodos(createTodos);
        setTodoValue('');
    };

    //todoの削除
    const onClickDelete = (index) => {
        const createTodos = [...addTodos];
        createTodos.splice(index, 1);
        setAddTodos(createTodos);
    };

    //todoの詳細
    // const [todoDetail, setTodoDetail] = useState(['']);

    //todoのステータスに関して(未完了、完了、進行中)
    // const onClickSwitch = (index) => {
    //   const switchTodo = [...todoValue];
    //   if (switchTodo[index].status === "進行中") {
    //     switchTodo[index].status = "完了";
    //   } else if (switchTodo[index].status === "完了") {
    //     switchTodo[index].status = "進行中"
    //   }
    //   setTodoValue(switchTodo);
    // };

    return (
    <>
      <div className="todo-area">
        <h1>TODOリスト</h1>
        <input placeholder="TODOを入力する" value={todoValue} onChange={onChangeTodoValue} />
        {/* <textarea placeholder="詳細を入力する" value={todoDetail} onChange={onChangeTodoValue} /> */}
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="not-complete-area">
        <h2>todo一覧</h2>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>タイトル</td>
              <td>状態</td>
            </tr>
          </thead>
          <tbody id="todo-body">
            {addTodos.map((todo, index) => (
                <tr>
                  <td>{index+1}</td>
                  <td>{todo}</td>
                  {/* <td><button onClick={() => onClickSwitch(index)}>{todo.status}</button></td> */}
                  <td><button onClick={() => onClickDelete(index)}>削除</button></td>
               </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
