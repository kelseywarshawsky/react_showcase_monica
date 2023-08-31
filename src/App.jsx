import { useState } from 'react'
import './App.css'
import { Box, Typography, Checkbox, TextField, Button } from '@mui/material'



function App() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [checked, setChecked] = useState("1")
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("")


  return (
   <Box>
    <Typography variant="h1">
      our to do app
    </Typography>
    <div>
      <Box>
        <Box>{todos}</Box>
    <TextField onChange={(e) => setNewTodo(e.target.value)} id="outlined-basic" label="To Do" variant="outlined" />
    </Box>
    <Button onClick={() => setTodos([...todos, newTodo])} sx={{marginLeft: '1em'}} variant="contained" >Add To Do</Button>
      <Checkbox value="1" onChange={(e)=> setChecked(e.target.value)} color="warning" id= "1" checked={checked === "1"} {...label} />
      <Checkbox value="2" onChange={(e)=> setChecked(e.target.value)} id= "2" checked={checked === "2"}{...label} />
      <Checkbox value="3" onChange={(e)=> setChecked(e.target.value)} id= "3" checked={checked === "3"}{...label} />
    </div>

   </Box>
  )
  }

export default App
