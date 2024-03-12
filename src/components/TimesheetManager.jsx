import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function TimesheetManager() {
  const [employeeInfo, setEmployeeInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const [timesheetEntries, setTimesheetEntries] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployeeInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddEntry = () => {
    setTimesheetEntries(prevEntries => [...prevEntries, { ...employeeInfo }]);
    setEmployeeInfo({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    });
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Timesheet Manager
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={employeeInfo.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={employeeInfo.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={employeeInfo.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={employeeInfo.phoneNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleAddEntry}>
            Add Entry
          </Button>
        </Grid>
      </Grid>
      <br />
      <Typography variant="h5" align="center" gutterBottom>
        Timesheet Entries
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timesheetEntries.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.firstName}</TableCell>
                <TableCell>{entry.lastName}</TableCell>
                <TableCell>{entry.email}</TableCell>
                <TableCell>{entry.phoneNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default TimesheetManager;
