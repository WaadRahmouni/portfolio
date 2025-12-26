import React, { useState, useEffect } from "react";
import "./dashboard.css";

const EducationForm = ({ initialData, onSubmit, onCancel }) => {
  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (initialData) {
      setDegree(initialData.degree);
      setUniversity(initialData.university);
      setYear(initialData.year);
      setDescription(initialData.description);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ degree, university, year, description });
    setDegree("");
    setUniversity("");
    setYear("");
    setDescription("");
  };

  return (
    <div className="formOverlay">
      <form className="EducationForm" onSubmit={handleSubmit}>
        <h3>{initialData ? "Modifier Formation" : "Ajouter Formation"}</h3>

        <input
          type="text"
          placeholder="Diplôme"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Université"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Année (ex: 2022 - 2025)"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />

        <div className="formButtons">
          <button type="submit" className="btn save">
            {initialData ? "Modifier" : "Ajouter"}
          </button>
          <button type="button" className="btn cancel" onClick={onCancel}>
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
