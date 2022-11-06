import React, { useState, useMemo } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Page404 from "./pages/Page404/Page404";
import { ErrorBoundary } from "./ErrorBoundary";
import Models from "./pages/Models/Models";
import GalleryList from "./pages/Models/Gallery/GalleryList";
import ModelLocations from "./pages/Models/ModelLocations/ModelLocations";
import { UserAuthContext } from "./context/UserAuthContext";
import { theUsers } from "./context/UserAuthContext";


const App = () => {

  const [value, setValue] = useState(theUsers)

  return (
    <Router>
      <UserAuthContext.Provider value={{ value, setValue }}>
        <Navbar />
        <Routes>

          <Route path="/" element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Page404 />} />
          <Route path="models" element={<Models />}>
            <Route path="/models/gallery" element={<GalleryList />} />
            <Route path="/models/locations" element={<ModelLocations />} />
          </Route>
        </Routes>
      </UserAuthContext.Provider>

    </Router>

  );
}

export default App;