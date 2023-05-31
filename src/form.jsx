import { useState } from 'react';

export function NewToDoForm({ addTodo }) {
    const [newItem, setNewItem] = useState("");
    function submitHandle(e) {
        e.preventDefault();
        if (newItem ==='') return
        addTodo(newItem);
        setNewItem("");
      }
    return (
    <form onSubmit={submitHandle} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        id="item"
      />
    </div>
    <button className="btn">Add New Item</button>
  </form>
  )
}