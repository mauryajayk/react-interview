import React, { useState } from "react";

const DarkMode = () => {
  const [isDarkmode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkmode") === "true" // Fixed comparison operator
  );

  // function to toggle
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      localStorage.setItem("isDarkMode", !prevMode); // Fixed variable name
      return !prevMode;
    });
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>
        Switch to {isDarkmode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default DarkMode;