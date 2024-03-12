import React, { useState } from 'react';
import "../style/TimesheetManager.css";

function TimesheetManager() {

  
  const [timesheetEntries, setTimesheetEntries] = useState([]);
  const [employeeInfo, setEmployeeInfo] = useState({
    name: '',
    department: '',
    // Add more fields as needed
  });
  const [date, setDate] = useState('');
  const [Time, setTime] = useState('');
  const [timeOut, setTimeOut] = useState('');

  const [hoursWorked, setHoursWorked] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleEmployeeInfoChange = (e) => {
    const { name, value } = e.target;
    setEmployeeInfo({
      ...employeeInfo,
      [name]: value
    });
  };

  const addTimesheetEntry = (e) => {
    e.preventDefault();
    const newEntry = {
      date: date,
      Time: Time,
      timeOut: timeOut,
      hoursWorked: hoursWorked

    };
    setTimesheetEntries([...timesheetEntries, { ...newEntry, ...employeeInfo }]);
    setDate('');
    setTime('');
    setTimeOut('');
    setHoursWorked('');
    setEmployeeInfo({
      name: '',
      department: ''
      // Clear other employee info fields as needed
    });

  };

  const handleEdit = (index) => {
    const entryToEdit = timesheetEntries[index];
    setDate(entryToEdit.date);
    setTime(entryToEdit.Time);
    setTimeOut(entryToEdit.timeOut);
    setHoursWorked(entryToEdit.hoursWorked);
    setEmployeeInfo({
      name: entryToEdit.name,
      department: entryToEdit.department
      // Set other employee info fields as needed
    });
    setEditIndex(index);
  };

  const handleUpdate = (index) => {
    const updatedEntry = {
      date: date,
      Time: Time,
      timeOut: timeOut,
      hoursWorked: hoursWorked,
      name: employeeInfo.name,
      department: employeeInfo.department
      // Set other employee info fields as needed
    };
    const updatedEntries = [...timesheetEntries];
    updatedEntries[index] = updatedEntry;
    setTimesheetEntries(updatedEntries);
    setEditIndex(null);
  };

  const handleCancelEdit = () => {
    setDate('');
    setHoursWorked('');
    setEmployeeInfo({
      name: '',
      department: ''
      // Clear other employee info fields as needed
    });
    setEditIndex(null);

  };

  
  return (
    <div className='timesheet-div'>
      <h3>Employee Timesheet Management</h3>
      <form className='timesheet-form' onSubmit={addTimesheetEntry} >
        <h2>Employee Information...</h2>

        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={{ marginLeft: '10px' }}
          />
        </label>
        <label>
        Time:
        <input
          type="Time"
          value={Time}
          onChange={(e) => setTime(e.target.value)}
          required
          style={{ marginLeft: '10px' }}
        />
      </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={employeeInfo.name}
            onChange={handleEmployeeInfoChange}
            required
            style={{ marginLeft: '10px' }}
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={employeeInfo.department}
            onChange={handleEmployeeInfoChange}
            required
            style={{ marginLeft: '10px' }}
          />
        </label>
        
        {editIndex !== null ? (
          <>
            <button type="button" onClick={() => handleUpdate(editIndex)} style={{ marginLeft: '10px' }}>Update</button>
            <button type="button" onClick={handleCancelEdit} style={{ marginLeft: '10px' }}>Cancel</button>
          </>
        ) : (
          <button type="submit" style={{ marginLeft: '10px' }}>Add Entry</button>
        )}
      </form>
      <h2>Timesheet Entries</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Date</th>
            <th>Time In</th>
          </tr>
        </thead>
        <tbody>
          {timesheetEntries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.department}</td>
              <td>{entry.date}</td>
              <td>{entry.Time}</td>
              {editIndex === index && ( // Render Time Out input field only if editIndex matches the current index
                <td>
                  <input
                    type="time"
                    value={timeOut}
                    onChange={(e) => setTimeOut(e.target.value)}
                  />
                </td>
              )}
              <td>
                <button type="button" onClick={() => handleEdit(index)}>Edit</button>
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TimesheetManager;
