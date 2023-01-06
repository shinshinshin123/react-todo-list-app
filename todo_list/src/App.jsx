import React from "react";
import { useState } from "react";

export const App = () => {
  //todoの追加
  const [todoValue, setTodoValue] = useState("");
  const [todoContent, setTodoContent] = useState("");

  const [addTodos, setAddTodos] = useState([""]);
  const [addContent, setAddContent] = useState([""]);

  const onChangeTodoValue = (e) => setTodoValue(e.target.value);
  const onChangetodoContent = (e) => setTodoContent(e.target.value);

  const onClickAdd = () => {
    if (todoValue === "") return;
    const createTodos = [...addTodos, todoValue];
    const createContent = [...addContent, todoContent]
      setAddTodos(createTodos);
      setAddContent(createContent);
      setTodoValue("");
      setTodoContent("");
  };

  //todoの削除
  const onClickDelete = (index) => {
    const createTodos = [...addTodos];
    createTodos.splice(index, 1);
    setAddTodos(createTodos);
  };

  //ステータスのセレクトボックス
  const [status, setStatus] = React.useState("react");

  const statusChange = e => setStatus(e.target.value);

  return (
  <>
    <div className="todo-area">
      <h1>TODOリスト</h1>
      <p>タイトル</p>
      <input
        placeholder="TODOを入力する"
        value={todoValue}
        onChange={onChangeTodoValue}
      />
      <p>詳細</p>
      <input
        placeholder="TODO詳細"
        value={todoContent}
        onChange={onChangetodoContent}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
    <div className="not-complete-area">
      <h2>todo一覧</h2>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>タイトル</td>
            <td>詳細</td>
            <td>状態</td>
          </tr>
        </thead>
      <tbody id="todo-body">
        {addTodos.map((todo, index, content) => (
          <tr>
            <td>{index+1}</td>
            <td>{todo}</td>
            <td>{content}</td>
            <td>
              <select value={status} onChange={statusChange}>
                <option value="not-started-yet">未着手</option>
                <option value="in-progress">進行中</option>
                <option value="completion">完了</option>
              </select>
            </td>
              <td><button onClick={() => onClickDelete(index)}>削除</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  </>
  );
};
