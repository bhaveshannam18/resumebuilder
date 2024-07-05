import React, { useEffect, useState } from "react";

const EducationForm = ({ handleChange, educationData }) => {
  const [formData, setFormData] = useState({
    schoolName: "",
    boardName: "",
    schoolPercentage: "",
    schoolFromDate: "",
    schoolToDate: "",
    collegeName: "",
    degree: "",
    collegePercentage: "",
    collegeFromDate: "",
    collegeToDate: "",
  });

  useEffect(() => {
    setFormData(educationData);
  }, []);

  return (
    <div className="flex justify-center overflow-auto max-h-screen">
      <form className="px-8 pt-6 pb-8 mb-4 w-full max-w-3xl">
        {/* Education Section */}
        <div className="mb-6">
          {/* <h2 className="text-lg font-bold mb-2">Education Details</h2> */}
          {/* School */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">School Education</h3>
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2 mb-4">
                <label
                  htmlFor="schoolName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  School Name
                </label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={(e) => { 
                    handleChange("education", {
                      ...formData,
                      schoolName: e.target.value,
                    })
                  
                  setFormData({
                    ...formData,
                    schoolName: e.target.value,
                  })
                }}
                  placeholder="Enter your school name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label
                  htmlFor="boardName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Board Name
                </label>
                <input
                  type="text"
                  id="boardName"
                  name="boardName"
                  value={formData.boardName}
                  onChange={(e) =>
                    {handleChange("education", {
                      ...formData,
                      boardName: e.target.value,
                    })
                    setFormData({
                      ...formData,
                      boardName: e.target.value,
                    })
                  }
                  }
                  placeholder="Enter your board name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label
                  htmlFor="schoolPercentage"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Percentage
                </label>
                <input
                  type="text"
                  id="schoolPercentage"
                  name="schoolPercentage"
                  value={formData.schoolPercentage}
                  onChange={(e) =>
                   { handleChange("education", {
                      ...formData,
                      schoolPercentage: e.target.value,
                    })
                    setFormData({
                      ...formData,
                      schoolPercentage: e.target.value,
                    })
                  }
                  }
                  placeholder="Enter your school percentage"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label
                  htmlFor="schoolFromDate"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  From Date
                </label>
                <input
                  type="date"
                  id="schoolFromDate"
                  name="schoolFromDate"
                  value={formData.schoolFromDate}
                  onChange={(e) =>
                    {handleChange("education", {
                      ...formData,
                      schoolFromDate: e.target.value,
                    })
                    setFormData({
                      ...formData,
                      schoolFromDate: e.target.value,
                    })
                  }
                  }
                  placeholder="From Date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label
                  htmlFor="schoolToDate"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  To Date
                </label>
                <input
                  type="date"
                  id="schoolToDate"
                  name="schoolToDate"
                  value={formData.schoolToDate}
                  onChange={(e) =>
                    {handleChange("education", {
                      ...formData,
                      schoolToDate: e.target.value,
                    })
                    setFormData({
                      ...formData,
                      schoolToDate: e.target.value,
                    })
                  }
                  }
                  placeholder="To Date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </div>
          </div>
          {/* College */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">College Education</h3>
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2 mb-4">
                <label
                  htmlFor="collegeName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  College Name
                </label>
                <input
                  type="text"
                  id="collegeName"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={(e) =>
                    {handleChange("education", {
                      ...formData,
                      collegeName: e.target.value,
                    })
                    setFormData({
                      ...formData,
                      collegeName: e.target.value,
                    })
                  }
                  }
                  placeholder="Enter your college name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label
                  htmlFor="degree"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Degree
                </label>
                <input
                  type="text"
                  id="degree"
                  name="degree"
                  value={formData.degree}
                  onChange={(e) =>
                    {handleChange("education", {
                      ...formData,
                      degree: e.target.value,
                    })
                    setFormData({
                      ...formData,
                      degree: e.target.value,
                    })
                  }
                  }
                  placeholder="Enter your degree"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label
                  htmlFor="collegePercentage"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Percentage
                </label>
                <input
                  type="text"
                  id="collegePercentage"
                  name="collegePercentage"
                  value={formData.collegePercentage}
                  onChange={(e) =>
                    {handleChange("education", {
                      ...formData,
                      collegePercentage: e.target.value,
                    })
                    setFormData({
                      ...formData,
                      collegePercentage: e.target.value,
                    })
                  }
                  }
                  placeholder="Enter your college percentage"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label
                  htmlFor="collegeFromDate"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  From Date
                </label>
                <input
                  type="date"
                  id="collegeFromDate"
                  name="collegeFromDate"
                  value={formData.collegeFromDate}
                  onChange={(e) =>
                   { handleChange("education", {
                      ...formData,
                      collegeFromDate: e.target.value,
                    })
                    setFormData({
                      ...formData,
                      collegeFromDate: e.target.value,
                    })
                  }
                  }
                  placeholder="From Date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="w-1/2 px-2 mb-4">
                <label
                  htmlFor="collegeToDate"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  To Date
                </label>
                <input
                  type="date"
                  id="collegeToDate"
                  name="collegeToDate"
                  value={formData.collegeToDate}
                  onChange={(e) =>
                   { handleChange("education", {
                      ...formData,
                      collegeToDate: e.target.value,
                    })
                    setFormData({
                      ...formData,
                      collegeToDate: e.target.value,
                    })
                  }
                  }
                  placeholder="To Date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
