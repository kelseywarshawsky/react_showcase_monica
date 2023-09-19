import { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  TextField,
  Button,
  // ListItemButton,
  // ListItemText,
  handleSaveEdit,
  handleEdit,
} from "@mui/material";
import TodoItem from "./components/TodoItem";
// import TodoCheckbox from "./TodoCheckbox";
import SearchBarItem from "./components/Searchbar";

export default function Todo() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedText, setEditedText] = useState("");

  const checkBoxChange = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  const handleRemove = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedText(todos[index].name);
  };

  const handleSaveEdit = (index) => {
    const newTodos = [...todos];
    newTodos[index].name = editedText;
    setTodos(newTodos);
    setEditingIndex(-1);
  };

  return (
    <Box>
      <Typography variant="h1">our to do app</Typography>
      <div>
        <Box>
          <TextField
            onChange={(e) => setNewTodo(e.target.value)}
            value={newTodo}
            id="outlined-basic"
            label="To Do"
            variant="outlined"
          />
        </Box>
        <Box>
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              index={index}
              editingIndex={editedText}
              todo={todo}
              editedText={editedText}
              setEditedText={setEditedText}
            />
          ))}
        </Box>

        <Button
          onClick={() =>
            setTodos([...todos, { name: newTodo, checked: false }])
          }
          sx={{ marginLeft: "1em" }}
          variant="contained"
        >
          Add To Do
        </Button>
      </div>
    </Box>
  );
}
