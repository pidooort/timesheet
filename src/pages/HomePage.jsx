import '../style/Homepage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '@mui/material';


function HomePage() {
  return (
    <div>
        <Container>
      <h2>Welcome to the Timesheet Manager</h2>
      {/* Other content */}
      <Link to="/timesheet">
        <Button variant="outlined" color="primary" size="large">Go to Timesheet Manager</Button>
      </Link>
      </Container>
    </div>
  );
}

export default HomePage;
