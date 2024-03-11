import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeClass = "dark";
    const body = document.body;

    if (isDarkMode) {
      body.classList.add(darkModeClass);
    } else {
      body.classList.remove(darkModeClass);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? "Light Mode" : <span>dark</span>}
    </button>
  );
};

export default DarkModeToggle;
