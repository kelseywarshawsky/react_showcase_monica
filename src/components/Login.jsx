import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TextField, Typography } from "@mui/material";

export default function FixedContainer() {
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
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "20ch", display: "block" },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography />
            Please Login
            <TextField
              sx={{ bgcolor: "white" }}
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField
              sx={{ bgcolor: "white" }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
