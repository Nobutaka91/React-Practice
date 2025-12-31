import React, { useState } from 'react'

const Item = ({ todo, complete, updateTodo }) => {
  // タイトルをダブルクリックするとタイトルを変更出来るようにする
  const [ editingContent, setEditingContent ] = useState(todo.content);

  const changeContent = (e) => setEditingContent(e.target.value);

  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };
    updateTodo(newTodo);
  }

  const confirmContent = (e) => {
    e.preventDefault(); // 画面遷移が発生しなくなる
    const newTodo = { ...todo, editing: !todo.editing, content: editingContent };
    updateTodo(newTodo);
  }
  

  return (
    <div>
      <button onClick={() => complete(todo.id)}>完了</button>
      <form onSubmit={confirmContent} style={{ display: 'inline' }}>
        {todo.editing ? (
          <input type="text"
          value={editingContent}
          onChange={changeContent}
          />
        ) : (
          <span onDoubleClick={toggleEditMode}>{todo.content}</span>
        )}
      </form>
    </div>
  )
}

export default Item