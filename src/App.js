// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
// import CGPAForm from './components/CGPAForm';
// import CGPAList from './components/CGPAList';
import GpaCalculator from './components/Cgpa.js';

function App() {
  const [courses, setCourses] = useState([]);
  // const [sems, setSems] = useState([]);

  const handleCourseAdded = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  // const handleSemAdded = (newSem) => {
  //   setSems([...sems, newSem]);
  // };

  const [activeCalculator, setActiveCalculator] = useState('sgpa');

  const handleNavLinkClick = (calculatorType) => {
    setActiveCalculator(calculatorType);
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand href="#home">GPA Calculator</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#sgpa" onClick={() => handleNavLinkClick('sgpa')}>SGPA Calculator</Nav.Link>
              <Nav.Link href="#cgpa" onClick={() => handleNavLinkClick('cgpa')}>CGPA Calculator</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <h1>{activeCalculator === 'sgpa' ? 'SGPA Calculator' : 'CGPA Calculator'}</h1>
        {activeCalculator === 'sgpa' ? (
          <div>
            <CourseForm onCourseAdded={handleCourseAdded} />
            <CourseList courses={courses} />
          </div>
        ) : (
          <div>
            {/* <CGPAForm onSemAdded={handleSemAdded} />
            <CGPAList sems={sems} /> */}
            <GpaCalculator />
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
