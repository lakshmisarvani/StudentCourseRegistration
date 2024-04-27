import React from 'react';
import './student.css';
import './navbar.css';
import { Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ViewCourses from './ViewCourses';
import CourseRegistration from './CourseRegistration';
import ProfileCard from './profilecard/ProfileCard';
import ContactUs from './Contact';

export default function StudentNavBar() {
  
  return (
    <div>
      <h3 style={{marginTop:'-60px'}}>STUDENT HUB </h3>
      <div className='navbar1'>
        <nav className="nav-container">
          <ul className="navbar1-link">
            <li><Link to="/courseregistration" className="navbar1-link"><FontAwesomeIcon icon={faBook} /> Courses</Link></li><br/>
            <li><Link to="/viewcourses" className="navbar1-link"><FontAwesomeIcon icon={faChalkboardTeacher} /> My Courses</Link></li><br/>
            <li><Link to="/profilecard" className="navbar1-link"><FontAwesomeIcon icon={faUser} /> My Profile</Link></li><br/>
            <li><Link to="/contactus" className="navbar1-link"><FontAwesomeIcon icon={faEnvelope} /> Contact</Link></li><br/>
          </ul>
        </nav>
        <Routes>
          <Route path="/courseregistration" element={<CourseRegistration/>} exact />
          <Route path="/viewcourses" element={<ViewCourses />} exact />
          <Route path="/profilecard" element={<ProfileCard/>}exact/>
          <Route path="/contactus" element={<ContactUs/>}exact/>
        </Routes>
      </div>
    </div>
  );
}
