import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '.././api/axiosInstance'; // Assuming you have axiosInstance set up
import { Button } from 'antd';
import ResumeToPrint from './LayoutTemplates/ResumeToPrint';
import { useReactToPrint } from 'react-to-print';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState([]);
  const [printResumeData, setPrintResumeData] = useState();

  const resumeRef = useRef();

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const response = await axiosInstance.get(`/api/resume/user/${user._id}`);
      console.log(response)
      setResumes(response.data);
    } catch (error) {
      console.error('Error fetching resumes:', error);
      // Handle error
    }
  };

  const handleModal = (visiblity, resumeId) => {
    
  }

  const handleDownload = async (resumeId) => {
    try {
      const response = await axiosInstance.get(`/api/resume/${resumeId}/download`, {
        // responseType: 'blob', // Ensure responseType is blob
      });

      setPrintResumeData(response.data);

      handlePrint();
  
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Handle error
    }
  };

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });
  

  const handleDelete = async (resumeId) => {
    try {
      await axiosInstance.delete(`/api/resume/${resumeId}`);
      // Optionally, update local state or refetch resumes
      fetchResumes(); // Example: refetch resumes after deletion
    } catch (error) {
      console.error('Error deleting resume:', error);
      // Handle error
    }
  };

  const handleEdit = async (resumeId) => {
    try {
      const response = await axiosInstance.get(`/api/resume/${resumeId}/download`);
      const resumeData = response.data;
      navigate('/edit-resume/' + resumeId, { state: { resumeData, isEditMode: true } });
    } catch (error) {
      console.error('Error fetching resume data:', error);
    }
  };

  return (
    <div className="container mx-auto px-2 py-8 h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <Link to="/create-resume">
          <Button type="primary">Create Resume</Button>
        </Link>
      </div>
      <p className="text-lg">Welcome, {user.name}!</p>

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-2">Your Resumes</h3>
        <ul className="space-y-4">
          {resumes.map((resume) => (
            <li key={resume._id} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center space-x-4">
                <h2>{resume.resumeName}</h2>
                {/* <div>{resume.basicDetails.firstName} {resume.basicDetails.lastName}</div> */}
              </div>
              <div className="flex items-center space-x-4">
              <Button type="primary" onClick={() => handleEdit(resume._id)}>Edit</Button>
                <Button type="primary" onClick={() => handleDownload(resume._id)}>Download</Button>
                <Button type="danger" onClick={() => handleDelete(resume._id)}>Delete</Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='hidden'>
      <ResumeToPrint ref={resumeRef} resumeData={printResumeData} />
      </div>
      </div>
  );
};

export default Dashboard;
