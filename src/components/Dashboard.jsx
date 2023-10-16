import  React  from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


function Dashboard() {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Welcome to Your Dashboard
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px", // You can adjust the height as needed
            bgcolor: "lightblue", // Change the background color as desired
            borderRadius: "8px",
            boxShadow: 3,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="https://www.youtube.com/watch?v=Yf_Lwe6p-Cg&ab_channel=WhamVEVO" // Replace with your YouTube video URL
            target="_blank"
          >
            Watch Video
          </Button>
        </Box>
      </div>
    );
  }
  
  export default Dashboard;
  