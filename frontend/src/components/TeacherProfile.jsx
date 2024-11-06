import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TeacherProfile.css'
import Navbar from './Navbar';
// Teacher Profile component
const TeacherProfile = () => {
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch teacher data from backend
  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const response = await axios.get('/api/teacher/profile');  // replace with actual API
        setTeacher(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching teacher data');
        setLoading(false);
      }
    };

    fetchTeacherData();
  }, []);
  
  // Loading state
  if (loading) return <div>Loading...</div>;
  
  // Error state
  if (error) return <div>{error}</div>;

  return (
    <>
    <Navbar/>
    <div className="teacher-profile">
      <h1>Teacher Profile</h1>
      <div className="profile-card">
        <h2>{teacher.name}</h2>
        <p><strong>Email:</strong> {teacher.email}</p>
        <p><strong>School:</strong> {teacher.school}</p>
        <p><strong>Subject:</strong> {teacher.teachSubject}</p>
        <p><strong>Class:</strong> {teacher.teachSclass}</p>
      </div>
      
      <div className="actions">
        <button>Edit Profile</button>
      </div>
    </div>
    </>
  );
};

export default TeacherProfile;
