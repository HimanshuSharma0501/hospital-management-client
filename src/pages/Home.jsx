import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", padding: "50px 20px" }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Super Speciality Hospital
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        At Super Speciality Hospital, we provide world-class healthcare services
        with a patient-centered approach. Our state-of-the-art facilities and
        expert medical professionals are here to serve you 24/7.
      </Typography>
      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/appointments"
        >
          Book Appointment
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
