import React, { useEffect, useState } from "react";
import { Steps, Modal, Input, Button } from "antd";
import axiosInstance from '../api/axiosInstance';
import BasicDetailsForm from "./ResumeSections/BasicDetailsForm";
import EducationForm from "./ResumeSections/EducationForm";
import SkillsForm from "./ResumeSections/SkillsForm";
import ExperienceForm from "./ResumeSections/ExperienceForm";
import ProjectsForm from "./ResumeSections/ProjectsForm";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
const { Step } = Steps;

const CreateResume = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { resumeData, isEditMode } = location.state || {};
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    basicDetails: {},
    education: {},
    skills: {},
    experience: {},
    projects:{}
  });
  const [resumeName, setResumeName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (isEditMode && resumeData) {
      setFormData({
        basicDetails: resumeData.basicDetails,
        education: {
          ...resumeData.education,
          schoolFromDate: formatDate(resumeData.education.schoolFromDate),
          schoolToDate: formatDate(resumeData.education.schoolToDate),
          collegeFromDate: formatDate(resumeData.education.collegeFromDate),
          collegeToDate: formatDate(resumeData.education.collegeToDate),
        },
        skills: {
          selectedFrontend: resumeData.skills.selectedFrontend.map(skill => ({ label: skill, value: skill })),
          selectedBackend: resumeData.skills.selectedBackend.map(skill => ({ label: skill, value: skill })),
          selectedDatabase: resumeData.skills.selectedDatabase.map(skill => ({ label: skill, value: skill })),
          selectedTools: resumeData.skills.selectedTools.map(skill => ({ label: skill, value: skill })),
        },
        experience: resumeData.experience.map(exp => ({
          ...exp,
          fromDate: formatDate(exp.fromDate),
          toDate: formatDate(exp.toDate),
        })),
        projects: resumeData.projects,
      });
      setResumeName(resumeData.resumeName);
    }
  }, [isEditMode, resumeData]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const renderStep = (step) => {
    switch (step) {
      case 0:
        return <BasicDetailsForm handleChange={handleChange} basicDetailsData={formData.basicDetails}/>;
      case 1:
        return <EducationForm handleChange={handleChange} educationData={formData.education} />;
      case 2:
        return <SkillsForm handleChange={handleChange} skillsData={formData.skills} />;
      case 3:
        return <ExperienceForm handleChange={handleChange} experienceData={formData.experience}/>;
      case 4:
        return <ProjectsForm handleChange={handleChange} projectData={formData.projects} />;
      default:
        return null;
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (input, value) => {
    setFormData({
      ...formData,
      [input]: value,
    });
  };

  const handleModalOk = () => {
    setModalVisible(false);
    handleSubmit();
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

 
  const handleSubmit = async () => {
    const formattedData = {
      ...formData,
      skills: {
        selectedFrontend: formData?.skills?.selectedFrontend ? formData?.skills?.selectedFrontend.map(option => option.value) : [],
        selectedBackend: formData?.skills?.selectedBackend ? formData?.skills?.selectedBackend.map(option => option.value) : [],
        selectedDatabase: formData?.skills?.selectedDatabase ? formData?.skills?.selectedDatabase.map(option => option.value) : [],
        selectedTools: formData?.skills?.selectedTools ? formData?.skills?.selectedTools.map(option => option.value) : [],
      },
      user_id: user._id,
      resumeName: resumeName 
    };
    console.log("formattedData",formattedData)
    try {
      if (isEditMode) {
        await axiosInstance.put(`/api/resume/${resumeData._id}`, formattedData);
      } else {
        await axiosInstance.post("/api/resume/createResume", formattedData);
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting resume data:", error);
    }
  };

  return (
    <div className="flex flex-col h-full w-[80%] mx-auto ">
      <div className="bg-gray-100 p-4 md:p-6 lg:p-8">
        <Steps current={step} className="space-x-4">
          <Step title={"Basic Details"} />
          <Step title={"Education"} />
          <Step title={"Skills"} />
          <Step title={"Experience"} />
          <Step title={"Projects"} />
        </Steps>
      </div>
      <main className="flex-1 p-4 md:p-6 lg:p-8 relative flex flex-col">
        <div className="flex-grow">{renderStep(step)}</div>
        <div className="flex justify-between mt-4">
          {step !== 0 && (
            <div className="flex-shrink-0">
              <Button type="primary" onClick={prevStep} className="w-32">
                Previous
              </Button>
            </div>
          )}
          {step === 4 ? (
            <Button type="primary" onClick={() => setModalVisible(true)} className="w-32">
              Submit
            </Button>
          ) : (
            <div className="flex-shrink-0">
              <Button type="primary" onClick={nextStep} className="w-32">
                Next
              </Button>
            </div>
          )}
        </div>
      </main>
      <Modal
        title="Resume Name"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Input
          placeholder="Enter resume name"
          value={resumeName}
          onChange={(e) => setResumeName(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default CreateResume;
