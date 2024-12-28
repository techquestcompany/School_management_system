import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarComponent = ({ label, onDateChange, isRange }) => {
  const [date, setDate] = useState(isRange ? [null, null] : null);

  const handleChange = (selectedDate) => {
    setDate(selectedDate);
    if (onDateChange) onDateChange(selectedDate);
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>{label}</label>
      {isRange ? (
        <DatePicker
          selected={date[0]}
          onChange={(update) => handleChange(update)}
          startDate={date[0]}
          endDate={date[1]}
          selectsRange
          placeholderText="Select a date range"
          style={styles.input}
        />
      ) : (
        <DatePicker
          selected={date}
          onChange={(update) => handleChange(update)}
          placeholderText="Select a date"
          style={styles.input}
        />
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "10px 0",
    width: "100%",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
};

export default CalendarComponent;
