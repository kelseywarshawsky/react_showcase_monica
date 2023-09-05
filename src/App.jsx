import { useState } from "react";
import "./App.css";
import {
  Box,
  Typography,
  Checkbox,
  TextField,
  Button,
  ListItemButton,
  ListItemText,
} from "@mui/material";

function App() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedText, setEditedText] = useState("");

  const checkBox = (index) => {
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
            <ListItemButton key={index} component="a" href="#simple-list">
              {editingIndex === index ? (
                <>
                  <TextField
                    Value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={() => handleSaveEdit(index)}
                  >
                    Save
                  </Button>
                </>
              ) : (
                <>
                  <ListItemText primary={todo.name} />
                  <Checkbox
                    onChange={() => checkBox(index)}
                    color="warning"
                    id="1"
                    checked={todo.checked}
                    {...label}
                  />
                  <Button
                    type="button"
                    onClick={() => handleEdit(index)}
                    variant="outlined"
                  >
                    Edit
                  </Button>

                  <Button
                    type="button"
                    onClick={() => handleRemove(index)}
                    variant="outlined"
                  >
                    Delete
                  </Button>
                </>
              )}
            </ListItemButton>
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

export default App;
