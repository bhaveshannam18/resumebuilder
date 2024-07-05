import React from 'react';
import { format } from 'date-fns'; // Import format function from date-fns

const ResumeToPrint = React.forwardRef(({ resumeData }, ref) => {
  if (!resumeData) {
    return null; // If resumeData is undefined or null, return null or handle the case accordingly
  }

  const {
    basicDetails = {},
    education = {},
    experience = [],
    projects = [],
    skills = {},
    resumeName = "",
  } = resumeData;

  const formatDate = (dateString) => {
    if (!dateString) return ''; 
    try {
      const date = new Date(dateString);
      return format(date, 'MMM yyyy'); 
    } catch (error) {
      console.error('Error parsing date:', error);
      return ''; 
    }
  };

  return (
    <div ref={ref} className="max-w-full mx-auto bg-white shadow-md rounded-lg p-8 mb-8">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold font-serif">{`${basicDetails.firstName || ''} ${basicDetails.lastName || ''}`}</h1>
      <p className="text-lg text-gray-700">{basicDetails.emailAddress || ''}</p>
      <p className="text-lg text-gray-700">{basicDetails.contactNumber || ''}</p>
    </div>
  
    <hr className="my-6 border-gray-300" />
  
    {/* Education Section */}
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-3 font-serif">Education</h2>
      <div className="flex justify-between">
        <div className="w-1/2 pr-4">
          <p className="text-lg font-serif">{education.schoolName || ''}</p>
          <p className="text-lg font-serif">{education.boardName || ''}</p>
          <p className="text-lg font-serif">{education.schoolPercentage || ''}%</p>
          <p className="text-lg font-serif">{`${formatDate(education.schoolFromDate)} - ${formatDate(education.schoolToDate)}`}</p>
        </div>
        <div className="w-1/2 pl-4">
          <p className="text-lg font-serif">{education.collegeName || ''}</p>
          <p className="text-lg font-serif">{education.degree || ''}</p>
          <p className="text-lg font-serif">{education.collegePercentage || ''}%</p>
          <p className="text-lg font-serif">{`${formatDate(education.collegeFromDate)} - ${formatDate(education.collegeToDate)}`}</p>
        </div>
      </div>
    </div>
  
    <hr className="my-6 border-gray-300" />
  
    {/* Experience Section */}
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-3 font-serif">Experience</h2>
      {experience.map((obj, index) => (
        <div key={index} className="mb-4">
          <p className="text-lg font-serif">{obj.designation || ''}</p>
          <p className="text-lg font-serif">{obj.companyName || ''}</p>
          <p className="text-lg font-serif">{obj.description || ''}</p>
          <p className="text-lg font-serif">{obj.fromDate ? `From: ${formatDate(obj.fromDate)}` : ''}</p>
          <p className="text-lg font-serif">{obj.toDate ? `To: ${formatDate(obj.toDate)}` : ''}</p>
        </div>
      ))}
    </div>
  
    <hr className="my-6 border-gray-300" />
  
    {/* Projects Section */}
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-3 font-serif">Projects</h2>
      {projects.map((obj, index) => (
        <div key={index} className="mb-4">
          <p className="text-lg font-serif font-bold">{obj.projectName || ''}</p>
          <p className="text-lg font-serif text-blue-600">{obj.projectLink || ''}</p>
          <p className="text-lg font-serif">{obj.projectDescription || ''}</p>
        </div>
      ))}
    </div>
  
    <hr className="my-6 border-gray-300" />
  
    {/* Skills Section */}
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-3 font-serif">Skills</h2>
      <ul className="list-disc list-inside text-lg font-serif">
        <li><strong>Frontend:</strong> {skills.selectedFrontend?.join(', ') || ''}</li>
        <li><strong>Backend:</strong> {skills.selectedBackend?.join(', ') || ''}</li>
        <li><strong>Database:</strong> {skills.selectedDatabase?.join(', ') || ''}</li>
        <li><strong>Tools:</strong> {skills.selectedTools?.join(', ') || ''}</li>
      </ul>
    </div>
  
    <hr className="my-6 border-gray-300" />
  
    {/* Footer Section */}
    <div className="text-center">
      <p className="text-lg font-serif">Resume Name: {resumeName}</p>
    </div>
  </div>
  
  );
});

export default ResumeToPrint;
