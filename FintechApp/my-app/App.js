import React from 'react';
import BottomNavBar from "./NavBar/BottomNavBar";
import { ThemeProvider, useTheme } from './theme/ThemeContext';


export default function App() {
  return (
      <ThemeProvider>
        <BottomNavBar />
      </ThemeProvider>
  );
}