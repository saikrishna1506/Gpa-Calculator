import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GpaCalculator = () => {
  const [gpas, setGpas] = useState(Array(8).fill('')); // 4 years * 8 semesters = 32 fields
  const [cgpa, setCgpa] = useState('N/A');

  const handleChange = (index, value) => {
    const newGpas = [...gpas];
    newGpas[index] = value;
    setGpas(newGpas);
  };

  const calculateAverage = () => {
    const validGpas = gpas.filter((gpa) => !isNaN(parseFloat(gpa)) && parseFloat(gpa) >= 0);
    const sum = validGpas.reduce((acc, gpa) => acc + parseFloat(gpa), 0);
    return validGpas.length > 0 ? (sum / validGpas.length).toFixed(2) : 'N/A';
  };

  const handleCalculate = () => {
    const average = calculateAverage();
    setCgpa(average);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Enter the SGPA- semester wise:</h3>
      <div className="row">
        {gpas.map((gpa, index) => (
          <div key={index} className="col-md-3 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder={`Semester ${index + 1}`}
              value={gpa}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <div className="mt-3">
        <button className="btn btn-primary" onClick={handleCalculate}>
          Calculate CGPA
        </button>
      </div>
      <div className="mt-3">
        <p className="lead">CGPA: {cgpa}</p>
      </div>
    </div>
  );
};

export default GpaCalculator;
