import React, { useState, useEffect } from "react";

const ExperienceForm = ({ handleChange, experienceData }) => {
  const [formData, setFormData] = useState([
    {
      designation: "",
      companyName: "",
      fromDate: "",
      toDate: "",
      description: "",
    },
  ]);

  useEffect(() => {
    if (experienceData && experienceData.length > 0) {
      setFormData(experienceData);
    }
  }, [experienceData]);

  const handleFormChange = (index, field, value) => {
    const newFormData = [...formData];
    newFormData[index][field] = value;
    setFormData(newFormData);
    handleChange("experience", newFormData);
  };

  const addNewExperience = () => {
    setFormData([
      ...formData,
      {
        designation: "",
        companyName: "",
        fromDate: "",
        toDate: "",
        description: "",
      },
    ]);
  };

  const handleDelete = (index) => {
    const newFormData = [...formData];
    newFormData.splice(index, 1);
    setFormData(newFormData);
    handleChange("experience", newFormData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      {formData.map((experience, index) => (
        <div key={index} className="mb-6 border p-4 rounded">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Designation
            </label>
            <input
              type="text"
              value={experience.designation}
              onChange={(e) =>
                handleFormChange(index, "designation", e.target.value)
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your designation"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Company Name
            </label>
            <input
              type="text"
              value={experience.companyName}
              onChange={(e) =>
                handleFormChange(index, "companyName", e.target.value)
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your company name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              From Date
            </label>
            <input
              type="date"
              value={experience.fromDate}
              onChange={(e) =>
                handleFormChange(index, "fromDate", e.target.value)
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              To Date
            </label>
            <input
              type="date"
              value={experience.toDate}
              onChange={(e) =>
                handleFormChange(index, "toDate", e.target.value)
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description/Roles and Responsibilities
            </label>
            <textarea
              value={experience.description}
              onChange={(e) =>
                handleFormChange(index, "description", e.target.value)
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your roles and responsibilities"
            />
          </div>
          {formData.length > 1 && (
            <button
              type="button"
              onClick={() => handleDelete(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addNewExperience}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Another Experience
      </button>
    </div>
  );
};

export default ExperienceForm;
