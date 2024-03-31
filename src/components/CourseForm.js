// src/components/CourseForm.js
import React, { useState } from 'react';
import './CourseForm.css'; // Import custom CSS for component styling

const CourseForm = ({ onCourseAdded }) => {
  const [course, setCourse] = useState({
    courseName: '',
    grade: '',
    credits: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCourseAdded(course); // Pass course data to parent component
    setCourse({ courseName: '', grade: '', credits: '' }); // Clear form inputs
  };

  return (
    <div className="course-form-container">
      <h3 className="mb-4">Add Subject</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" name="courseName" value={course.courseName} onChange={handleChange} placeholder="Course Name" required />
        </div>
        <div className="mb-3">
          <select className="form-select" name="grade" value={course.grade} onChange={handleChange} required>
            <option value="">Select grade</option>
            <option value="10">O</option>
            <option value="9">A+</option>
            <option value="8">A</option>
            <option value="7">B+</option>
            <option value="6">B</option>
            <option value="5">C</option>
            <option value="0">F</option>
          </select>
        </div>
        <div className="mb-3">
          <input type="number" className="form-control" name="credits" value={course.credits} onChange={handleChange} placeholder="Credits" required />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default CourseForm;
