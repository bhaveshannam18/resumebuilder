import React, { useEffect, useState } from "react";
import Select from "react-select";

const frontendOptions = [
  { value: "react", label: "React" },
  { value: "javascript", label: "JavaScript" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
  { value: "typescript", label: "TypeScript" },
];

const backendOptions = [
  { value: "node", label: "Node.js" },
  { value: "express", label: "Express" },
  { value: "django", label: "Django" },
  { value: "flask", label: "Flask" },
  { value: "spring", label: "Spring" },
  { value: "rails", label: "Ruby on Rails" },
];

const databaseOptions = [
  { value: "mongodb", label: "MongoDB" },
  { value: "mysql", label: "MySQL" },
  { value: "postgresql", label: "PostgreSQL" },
  { value: "sqlite", label: "SQLite" },
  { value: "redis", label: "Redis" },
  { value: "firebase", label: "Firebase" },
];

const toolsOptions = [
  { value: "git", label: "Git" },
  { value: "docker", label: "Docker" },
  { value: "webpack", label: "Webpack" },
  { value: "babel", label: "Babel" },
  { value: "eslint", label: "ESLint" },
  { value: "jest", label: "Jest" },
  { value: "vscode", label: "VS Code" },
];

const SkillsForm = ({handleChange, skillsData}) => {
  const [formData, setFormData] = useState({
    selectedFrontend: [],
    selectedBackend: [],
    selectedDatabase: [],
    selectedTools: [],
  });

  useEffect(() => {
    setFormData(skillsData);
  }, [skillsData]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Frontend
        </label>
        <Select
          isMulti
          name="frontendSkills"
          options={frontendOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(selectedOptions) => {
            handleChange("skills", {
              ...formData,
              selectedFrontend: selectedOptions,
            });
            setFormData({
              ...formData,
              selectedFrontend: selectedOptions,
            });
          }}
          value={formData.selectedFrontend}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Backend
        </label>
        <Select
          isMulti
          name="backendSkills"
          options={backendOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(selectedOptions) => {
            handleChange("skills", {
              ...formData,
              selectedBackend: selectedOptions,
            });
            setFormData({
              ...formData,
              selectedBackend: selectedOptions,
            });
          }}
          value={formData.selectedBackend}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Database
        </label>
        <Select
          isMulti
          name="databaseSkills"
          options={databaseOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(selectedOptions) => {
            handleChange("skills", {
              ...formData,
              selectedDatabase: selectedOptions,
            });
            setFormData({
              ...formData,
              selectedDatabase: selectedOptions,
            });
          }}
          value={formData.selectedDatabase}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Tools
        </label>
        <Select
          isMulti
          name="tools"
          options={toolsOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(selectedOptions) => {
            handleChange("skills", {
              ...formData,
              selectedTools: selectedOptions,
            });
            setFormData({
              ...formData,
              selectedTools: selectedOptions,
            });
          }}
          value={formData.selectedTools}
        />
      </div>
    </div>
  );
};

export default SkillsForm;
