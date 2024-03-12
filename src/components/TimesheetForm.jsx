import React, { useState } from 'react';
import "../style/TimesheetForm.css";

function TimesheetForm() {
  const [timesheetEntries, setTimesheetEntries] = useState([]);
  const [employeeInfo, setEmployeeInfo] = useState({
    name: '',
    department: '',
    // Add more fields as needed
  });
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

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
      time: time,
      hoursWorked: hoursWorked

    };
    setTimesheetEntries([...timesheetEntries, { ...newEntry, ...employeeInfo }]);
    setDate('');
    setTime('');
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
      <h3>Employee Timesheet.... </h3>
      <form className='timesheet-form' onSubmit={addTimesheetEntry} >
        <h2>Employee Information</h2>
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
        {/* Add more fields for employee info as needed */}
        
        <h2>Timesheet Entry</h2>
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
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
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
              <td>{entry.time}</td>
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
