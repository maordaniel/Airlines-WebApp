import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "../screens/HomePage";
import AirlinePage from "../screens/AirlingPage";
import NavBar from '../components/NavBar';

function Router(){

  const NotFound = () => (
    <div>
      <h1>Not Found!</h1>
    </div>
  );

  return (
    <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route path="airline/:airlineCode" element={<AirlinePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;