import React, { useState, useEffect } from "react";

const ProjectForm = ({ handleChange, projectData }) => {
  const [formData, setFormData] = useState([
    {
      projectName: "",
      projectLink: "",
      projectDescription: "",
    },
  ]);

  useEffect(() => {
    if (projectData && projectData.length > 0) {
      setFormData(projectData);
    }
  }, [projectData]);

  const handleFormChange = (index, field, value) => {
    const newFormData = [...formData];
    newFormData[index][field] = value;
    setFormData(newFormData);
    handleChange("projects", newFormData);
  };

  const addNewProject = () => {
    setFormData([
      ...formData,
      {
        projectName: "",
        projectLink: "",
        projectDescription: "",
      },
    ]);
  };

  const handleDelete = (index) => {
    const newFormData = [...formData];
    newFormData.splice(index, 1);
    setFormData(newFormData);
    handleChange("projects", newFormData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      {formData.map((project, index) => (
        <div key={index} className="mb-6 border p-4 rounded">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Project Name
            </label>
            <input
              type="text"
              value={project.projectName}
              onChange={(e) =>
                handleFormChange(index, "projectName", e.target.value)
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter project name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Project Link
            </label>
            <input
              type="text"
              value={project.projectLink}
              onChange={(e) =>
                handleFormChange(index, "projectLink", e.target.value)
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter project link"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Project Description
            </label>
            <textarea
              value={project.projectDescription}
              onChange={(e) =>
                handleFormChange(index, "projectDescription", e.target.value)
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter project description"
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
        onClick={addNewProject}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Another Project
      </button>
    </div>
  );
};

export default ProjectForm;
