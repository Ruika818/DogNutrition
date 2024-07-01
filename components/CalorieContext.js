import React, { createContext, useState, useContext } from 'react';

export const CalorieContext = createContext();

export const CalorieProvider = ({ children }) => {
    const [calorieNeeded, setCalorieNeeded] = useState(0); // Initialize with default value

    return (
        <CalorieContext.Provider value={{ calorieNeeded, setCalorieNeeded }}>
            {children}
        </CalorieContext.Provider>
    );
};

export default CalorieProvider;

export const useCalories = () => useContext(CalorieContext);