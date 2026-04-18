import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar'; 
import { getCourseMaterialDtata } from './service/CourseMaterialService';

import 'bootstrap/dist/css/bootstrap.min.css';
import { CourseMaterial } from './components/CourseMaterial';

function App() {
  return (
    <>
    <NavBar/>
    <CourseMaterial/>
    </>
  );
}

export default App;
