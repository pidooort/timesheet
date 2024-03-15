import '../style/SchedulePage.css';// WeeklyTimesheet.jsx
import React, { useState } from 'react';

function SchedulePage() {
  // Sample timesheet data
  const [timesheetData, setTimesheetData] = useState([
    { day: 'Monday', hoursWorked: 8 },
    { day: 'Tuesday', hoursWorked: 7 },
    { day: 'Wednesday', hoursWorked: 7.5 },
    { day: 'Thursday', hoursWorked: 8 },
    { day: 'Friday', hoursWorked: 7 },
    // Add more days as needed
  ]);

  const handleHoursChange = (index, hours) => {
    const updatedTimesheetData = [...timesheetData];
    updatedTimesheetData[index].hoursWorked = hours;
    setTimesheetData(updatedTimesheetData);
  };

  const getTotalHoursWorked = () => {
    return timesheetData.reduce((total, entry) => total + parseFloat(entry.hoursWorked || 0), 0);
  };

  return (
<<<<<<< HEAD
    <div>
        <Container>
      <h2>Schedule</h2>
      {/* Other content */}
      <p>This is where the user can navigate how long their time is.</p>
      <p>awts gege</p>
      <Link to="/timesheet">
      <Button variant="contained" sx={{ backgroundColor: '#007bff', color: '#fff', '&:hover': {
          backgroundColor: '#ff8a65',
        },
      }} >Go to Timesheet Manager</Button>
      </Link>
      </Container>
=======
    <div className='table-container'>
    <table className='table'>
      <thead>
        <tr>
          <th>Day</th>
          <th>Hours Worked</th>
        </tr>
      </thead>
      <tbody>
        {timesheetData.map((entry, index) => (
          <tr key={index}>
            <td>{entry.day}</td>
            <td>
              <input
                type="number"
                value={entry.hoursWorked}
                onChange={(e) => handleHoursChange(index, e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{getTotalHoursWorked()}</td>
        </tr>
      </tfoot>
    </table>
>>>>>>> c3da929dee9ebe0d96915994c4658b601b7faa5b
    </div>
  );
}

export default SchedulePage;
