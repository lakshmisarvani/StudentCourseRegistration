import React, { useState } from 'react';
import FacultyNavBar from './FacultyNavBar';

export default function Contact() {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Year:', year);
    console.log('Semester:', semester);
    console.log('Query:', query);
    setYear('');
    setSemester('');
    setQuery('');
  };
  const submit = () =>{
    window.alert("Query submitted successfully!")
  }

  return (
    <div>
      <h3 style={{marginTop:'-100px'}}>FACULTY HUB</h3>
      <br/><br/>
      <FacultyNavBar />
      <br/><br/><br/><br/><br/><br/>
      <h3  style={{marginLeft: '20px'}}>Contact Admin</h3>
      <div style={{ 
          border: '2px solid #ccc', 
          borderRadius: '10px', 
          padding: '20px', 
          width: '400px', // Adjusted width to 400px
          height: '400px', // Adjusted height to 400px to make it square
          marginTop: '-80px' 

        }}>
        <form onSubmit={handleSubmit} align="center">
          <div style={{ marginBottom: '5px' }}>
            <label htmlFor="year">Enter Year:</label>
            <input 
              type="number" 
              id="year" 
              name="year" 
              value={year}
              onChange={(e) => setYear(e.target.value)}
              style={{ 
                marginLeft: '10px',
                width: '60px', 
                padding: '8px', 
                border: '1px solid #ccc', 
                borderRadius: '5px', 
                boxSizing: 'border-box' 
              }}
              required 
            />
          </div>
          <div style={{ marginBottom: '0px' }}>
            <label htmlFor="semester">Enter Semester:</label>
            <input 
              type="number" 
              id="semester" 
              name="semester" 
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              style={{ 
                marginLeft: '10px',
                width: '60px', 
                padding: '8px', 
                border: '1px solid #ccc', 
                borderRadius: '5px', 
                boxSizing: 'border-box' 
              }}
              required 
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="query">Enter Query:</label>
           <textarea></textarea>
          </div>
          <button 
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#007bff', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }} 
            type="submit"
            onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'} onClick={submit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
