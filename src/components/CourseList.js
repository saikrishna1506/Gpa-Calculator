// src/components/CourseList.js
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './CourseList.css'; // Import custom CSS for component styling

const CourseList = ({ courses }) => {
  const [cgpa, setCGPA] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  // Calculate CGPA based on course data
  const calculateSGPA = () => {
    let totalCredits = 0;
    let sumProduct = 0;

    courses.forEach((course) => {
      const credits = parseFloat(course.credits);
      const grade = parseFloat(course.grade);

      if (!isNaN(credits) && !isNaN(grade)) {
        totalCredits += credits;
        sumProduct += credits * grade;
      }
    });

    if (totalCredits === 0) {
      setCGPA(null); // Set CGPA to null if totalCredits is zero to avoid division by zero
      setShowNotification(true); // Show notification
    } else {
      const calculatedCGPA = sumProduct / totalCredits;
      setCGPA(calculatedCGPA.toFixed(2)); // Set CGPA rounded to 2 decimal places
      setShowNotification(true); // Show notification
    }
  };
  const getGradeLetter = (value) => {
    switch (value) {
      case '10':
        return 'O';
      case '9':
        return 'A+';
      case '8':
        return 'A';
      case '7':
        return 'B+';
      case '6':
        return 'B';
      case '5':
        return 'C';
      case '0':
        return 'F';
      default:
        return '';
    }
  };
  // Handle Calculate button click
  const handleCalculateClick = () => {
    calculateSGPA();
  };

  return (
    <div className="course-list-container">
      <h2 className="mb-4">Subjects</h2>
      <ul className="course-list">
        {courses.map((course, index) => (
          <li key={index} className="course-item">
            <span>{course.courseName}</span>
            <span className="grade">{getGradeLetter(course.grade)}</span>
            <span className="credits">{course.credits} Credits</span>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-3" onClick={handleCalculateClick}>Calculate SGPA</button>
      <div className="notification-container">
        {showNotification && (
          <Alert variant={cgpa !== null ? 'success' : 'danger'} onClose={() => setShowNotification(false)} dismissible>
            {cgpa !== null ? (
              <span>SGPA Calculated: {cgpa}</span>
            ) : (
              <span>Error: Total credits cannot be zero!</span>
            )}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default CourseList;
