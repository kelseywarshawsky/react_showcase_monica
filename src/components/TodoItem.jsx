/* eslint-disable react/prop-types */
import React from "react";
import {
  Checkbox,
  TextField,
  Button,
  ListItemButton,
  ListItemText,
} from "@mui/material";

function TodoItem({
  index,
  editingIndex,
  todo,
  editedText,
  setEditedText,
  handleSaveEdit,
  label,
  checkBoxChange,
  handleEdit,
  handleRemove,
}) {
  return (
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
            onChange={() => checkBoxChange(index)}
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
  );
}

export default TodoItem;
