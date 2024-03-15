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
<<<<<<< HEAD
      <p>wahahaha</p>
      <p>attempt 000</p>
=======
      <p>wahahaha makulay ang buhay sa sinabawang supas</p>
>>>>>>> c3da929dee9ebe0d96915994c4658b601b7faa5b
      <Link to="/timesheet">
      <Button variant="contained" sx={{ backgroundColor: '#007bff', color: '#fff', '&:hover': {
          backgroundColor: '#ff8a65',
        },
      }} >Go to Timesheet Manager</Button>
      </Link>
      </Container>
    </div>
  );
}

export default HomePage;
