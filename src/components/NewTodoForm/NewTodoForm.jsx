import styled from "styled-components";

const Button = styled.button`
  background-color: #232632;
  color: #00a7fa;
`;
const Input = styled.input`
  padding: 5px;
  background-color: #232632;
  color: #d3d4d6;
  margin-right: 17px;
  width: 50%
`;

const NewTodoForm = ({ onChange, draft, onSubmit }) => {
  return (
    <>
      <Input onChange={onChange} type="text" value={draft} />
      <Button onClick={onSubmit}>Add</Button>
    </>
  );
};
export default NewTodoForm;
