// TODOリスト作成お疲れさまでした！気になった箇所にこんな感じでコメント残しておきます！

// まずアプリ起動させて挙動確認して気になったところですが、
// タイトルと詳細を入力して追加を押しtodoを複数個作成すると詳細が全部繋がってしまっているのと、
// 状態がそれぞれのTODOではなく一つ変更するとすべて変わってしまっているのでここは直せそうなら直してしまいましょう。（TODOリスト中級編でできていればOKです！

import React from "react";
import { useState } from "react";

export const App = () => {
  //todoの追加
  const [todoValue, setTodoValue] = useState("");
  const [todoContent, setTodoContent] = useState("");

  // 一番気になったのはtodoのタイトルをaddTodosで管理、todoの詳細をaddContentで管理みたいな複数のstateがtodoの情報を持っているみたいな状態はあまり好ましくないですね。。。
  // todoを管理するstateは一つにしておきたいので、一つ一つのtodoをオブジェクトにし
  // そのオブジェクトをtodos配列で管理する方向がよいかと思います！（これも中級編でできていればOKです！）

  const [addTodos, setAddTodos] = useState([""]);
  const [addContent, setAddContent] = useState([""]);

  const onChangeTodoValue = (e) => setTodoValue(e.target.value);
  const onChangetodoContent = (e) => setTodoContent(e.target.value);

  const onClickAdd = () => {
    if (todoValue === "") return;
    // いいですね！少し発展的かもしれませんが、よりスマートに書くならひとつひとつを以下のように短縮できそうです。
    // setAddTodos([...addTodos, todoValue])
    const createTodos = [...addTodos, todoValue];
    const createContent = [...addContent, todoContent];
    setAddTodos(createTodos);
    setAddContent(createContent);
    setTodoValue("");
    setTodoContent("");
  };

  //todoの削除
  // ここも↑と同じですが少し冗長ですね。以下でいいかと思います。const createTodos = [...addTodos]の一文いらないのでは？
  // const onClickDelete = (index) => setAddTodos(addTodos.splice(index, 1))
  const onClickDelete = (index) => {
    const createTodos = [...addTodos];
    createTodos.splice(index, 1);
    setAddTodos(createTodos);
  };

  //ステータスのセレクトボックス
  const [status, setStatus] = React.useState("react");

  const statusChange = (e) => setStatus(e.target.value);

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
              // アプリ起動して検証ツール開くとEach child in a list should have a unique "key" propというエラーが出ているかと思います。
              // map等ループ処理しているブロック内では、一番親要素にkeyという値を渡す必要があります！エラー文をコピペするなどして対処法調べてみてください！
              <tr>
                <td>{index + 1}</td>
                <td>{todo}</td>
                <td>{content}</td>
                <td>
                  <select value={status} onChange={statusChange}>
                    <option value="not-started-yet">未着手</option>
                    <option value="in-progress">進行中</option>
                    <option value="completion">完了</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
