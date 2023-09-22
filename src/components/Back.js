import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Back = () => {
  const navigate = useNavigate();
  return (
    <button className="back" onClick={() => navigate(-1)}>
      <span className="back-icon">&#8592;</span>
      <span className="back-text">Go Back</span>
    </button>
  );
};
