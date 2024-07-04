"use client"
// formContext.js
import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personalDetails: {
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        email: "",
        mobile: "",
        otherNumber: "",
        schoolBoard: "",
        percentage: "",
        stream: "",
        course1: "",
        course2: "",
        course3: "",
        course4: "",
        course5: "",
    },
    additionalDetails: {
        location1: "",
        location2: "",
        location3: "",
        location4: "",
        location5: "",
        collegebudget: "",
        textmessage:"",
    },
    checkbox: "",
  });

  const updateFormData = (section, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
