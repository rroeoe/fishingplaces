import React from "react";


//Local Imports
import { APIContextProvider } from "./Services/APIContextProvider";
import Cards from "./Components/Card";
import CardDetail from "./Components/CardDetail"
import "./App.css"
import Header from "./Layouts/Header"

//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//MUI
import { ThemeProvider, createTheme } from '@mui/material/styles';

const font = "'Inter', sans-serif;"

const theme = createTheme({
  palette: {
    primary: {
      main: "#BAABDA"
    },
    secondary: {
      main: "#506B35",
    }
  },
  typography: {
    fontFamily: font
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <APIContextProvider>
      <Header />
      <Routes>
          <Route path="/" element={<Cards />}></Route>
          <Route path=":CardID" element={<CardDetail />}></Route>
        </Routes>
    </APIContextProvider>
    </ThemeProvider>
  );
}
