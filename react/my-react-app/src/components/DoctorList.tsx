// src/components/DoctorList.tsx
import React from "react";
import { Link } from "react-router-dom";

const doctors = [
  { id: 1, patients: [101, 102] },
  { id: 2, patients: [201, 202] },
];

const DoctorList: React.FC = () => {
  return (
    <div>
      <h2>Doctor List</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            <strong>Doctor {doctor.id}</strong>
            <ul>
              {doctor.patients.map((patId) => (
                <li key={patId}>
                  <Link to={`/lesson3/doctors/${doctor.id}/patients/${patId}`}>
                    View Patient {patId}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
