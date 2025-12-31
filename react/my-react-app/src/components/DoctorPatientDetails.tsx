// src/components/DoctorPatientDetails.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Use string-union form for type safety
const DoctorPatientDetails: React.FC = () => {
  const { doctorId, patientId } = useParams<"doctorId" | "patientId">();
  const navigate = useNavigate();

  if (!doctorId || !patientId) {
    return <div>Missing parameters</div>;
  }

  const docId = Number(doctorId);
  const patId = Number(patientId);

  if (Number.isNaN(docId) || Number.isNaN(patId)) {
    return <div>Invalid IDs</div>;
  }

  return (
    <div>
      <h2>Doctor {docId}</h2>
      <h3>Patient {patId}</h3>
      <p>Showing details for Doctor {docId} and Patient {patId}.</p>

      {/* Back button */}
      <button
        onClick={() => navigate("/lesson3/")}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        ← Back to Doctor List
      </button>
    </div>
  );
};

export default DoctorPatientDetails;
