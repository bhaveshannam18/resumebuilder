import React, { useEffect, useState } from "react";

const BasicDetailsForm = ({handleChange, basicDetailsData}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    emailAddress: "",
  });

  useEffect(()=>{
    setFormData(basicDetailsData);
  },[]);

  return (
    <div className="flex justify-center">
      <form
        className="px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={e => {
              handleChange('basicDetails',{...formData,firstName:e.target.value})
              setFormData({
                    ...formData,
                    firstName:e.target.value
                  });
          }}
            placeholder="Enter your first name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={e => {
              handleChange('basicDetails',{...formData,lastName:e.target.value})
              setFormData({
                    ...formData,
                    lastName:e.target.value
                  });
          }}
            placeholder="Enter your last name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="contactNumber"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={e => {
              handleChange('basicDetails',{...formData,contactNumber:e.target.value})
              setFormData({
                    ...formData,
                    contactNumber:e.target.value
                  });
          }}
            placeholder="Enter your contact number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="emailAddress"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={e => {
              handleChange('basicDetails',{...formData,emailAddress:e.target.value})
              setFormData({
                    ...formData,
                    emailAddress:e.target.value
                  });
          }}
            placeholder="Enter your email address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default BasicDetailsForm;
