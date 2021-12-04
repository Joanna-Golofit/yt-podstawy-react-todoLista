const NewTodoForm = ({ onChange, draft, onSubmit }) => {
  return (
    <>
      <input onChange={onChange} type="text" value={draft} />
      <button onClick={onSubmit}>Add</button>
    </>
  );
};
export default NewTodoForm;
