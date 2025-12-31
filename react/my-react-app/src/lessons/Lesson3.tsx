// src/lessons/Lesson3.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import DoctorList from "../components/DoctorList";
import DoctorPatientDetails from "../components/DoctorPatientDetails";

const Lesson3: React.FC = () => {
  return (
    <div>
      <h2>Lesson 3: Doctor–Patient Details</h2>
      <Routes>
        <Route path="/" element={<DoctorList />} />
        <Route
          path="doctors/:doctorId/patients/:patientId"
          element={<DoctorPatientDetails />}
        />
      </Routes>
    </div>
  );
};

export default Lesson3;
