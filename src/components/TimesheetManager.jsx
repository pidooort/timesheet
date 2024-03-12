import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function TimesheetManager() {
  const [employeeInfo, setEmployeeInfo] = useState({
    name: '',
    department: '',
    time: '',
    date: ''
  });

  const [timesheetEntries, setTimesheetEntries] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

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
      name: '',
      department: '',
      time: '',
      date: ''
    });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEmployeeInfo(timesheetEntries[index]);
  };

  const handleUpdate = () => {
    setTimesheetEntries(prevEntries => {
      const updatedEntries = [...prevEntries];
      updatedEntries[editIndex] = { ...employeeInfo };
      return updatedEntries;
    });
    setEditIndex(-1);
    setEmployeeInfo({
      name: '',
      department: '',
      time: '',
      date: ''
    });
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Timesheet Manager
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={employeeInfo.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Department</InputLabel>
              <Select
                value={employeeInfo.department}
                onChange={handleChange}
                name="department"
              >
                <MenuItem value="ITSO BLDG 3">ITSO BLDG 3</MenuItem>
                <MenuItem value="ITSO BLDG 5">ITSO BLDG 5</MenuItem>
                {/* Add more departments as needed */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Time"
              name="time"
              type="time"
              value={employeeInfo.time}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date"
              name="date"
              type="date"
              value={employeeInfo.date}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            {editIndex === -1 ? (
              <Button type="button" variant="contained" color="primary" onClick={handleAddEntry}>
                Add Entry
              </Button>
            ) : (
              <div>
                <Button type="button" variant="contained" color="primary" onClick={handleUpdate}>
                  Update
                </Button>
                <Button type="button" onClick={() => setEditIndex(-1)}>
                  Cancel
                </Button>
              </div>
            )}
          </Grid>
        </Grid>
      </form>
      <br />
      <Typography variant="h5" align="center" gutterBottom>
        Timesheet Entries
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Time In</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timesheetEntries.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.name}</TableCell>
                <TableCell>{entry.department}</TableCell>
                <TableCell>{entry.time}</TableCell>
                <TableCell>{entry.date}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(index)}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default TimesheetManager;
