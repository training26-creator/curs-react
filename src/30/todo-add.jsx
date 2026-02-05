export function TodoAdd({ inputValue, handleInputChange, handleAdd }) {
  return (
    <div className="input-group">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button className="add-btn" onClick={handleAdd}>
        Adauga
      </button>
    </div>
  );
}
