import React, { useState } from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TextField, Typography } from "@mui/material";
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function FixedContainer() {

const [formData, setFormData] = useState({
  username: "",
  password: "",
});

const handleLogin = (e) => {
  e.preventDefault();

  if (formData.username === "yourUsername" && formData.password === "yourPassword") {
    return <Link to="/todo" />; // Change this route as needed
  }
};

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            bgcolor: "pink",
            height: "100vh",
            width: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleLogin}>
            <Typography />
            Please Login
            <TextField
              sx={{ bgcolor: "white" }}
              id="username"
              label="Username"
              variant="outlined"
              value={formData.username}
              onChange={(e) => 
              setFormData({ ...formData, username: e.target.value })
            }
            />
            <TextField
              sx={{ bgcolor: "white" }}
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              value={formData.password}
              onChange={(e) => 
              setFormData({ ...formData, password: e.target.value })
            }
            />
            <Link to="/dashboard">
            <Button type="submit" variant="contained">
              Login
            </Button>
            </Link>
            </form>
          </Box>
      </Container>
    </React.Fragment>
  );
}
