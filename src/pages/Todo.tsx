import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface TodoItem {
  id: number;
  text: string;
}

const TodoContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TodoInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const TodoButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 5px;

    button {
      background-color: #dc3545;
      color: #fff;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

const Todo: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoArr, setTodoArr] = useState<TodoItem[]>([]);

  const handleAddTodo = () => {
    if (todo === "") {
      alert("Please enter a todo");
    } else {
      setTodoArr([...todoArr, { id: Date.now(), text: todo }]);
      setTodo("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodoArr = todoArr.filter((item) => item.id !== id);
    setTodoArr(updatedTodoArr);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoArr));
  }, [todoArr]);

  return (
    <TodoContainer>
      <TodoInput
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter your todo"
      />
      <TodoButton onClick={handleAddTodo}>Add Todo</TodoButton>

      <TodoList>
        {todoArr.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </TodoList>
    </TodoContainer>
  );
};

export default Todo;
