import React, { useEffect, useState } from "react";
import {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation
} from "../../services/educationService";
import EducationForm from "./EducationForm";
import "./dashboard.css";

const EducationDashboard = () => {
  const [educationList, setEducationList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEdu, setEditingEdu] = useState(null);

  const loadEducation = async () => {
    const data = await getEducation();
    setEducationList(data);
  };

  useEffect(() => {
    loadEducation();
  }, []);

  const handleAdd = async (edu) => {
    await createEducation(edu);
    setShowForm(false);
    loadEducation();
  };

  const handleEdit = async (edu) => {
    await updateEducation(editingEdu._id, edu);
    setEditingEdu(null);
    setShowForm(false);
    loadEducation();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Supprimer cette formation ?")) {
      await deleteEducation(id);
      loadEducation();
    }
  };

  return (
    <div className="dashboardContent">
      <div className="dashboardHeader">
        <h2>Gestion des Formations</h2>
        <button
          className="addBtn"
          onClick={() => {
            setEditingEdu(null);
            setShowForm(true);
          }}
        >
          Ajouter une Formation
        </button>
      </div>

      <table className="dashboardTable">
        <thead>
          <tr>
            <th style={{color:"black"}}>Diplôme</th>
            <th>Université</th>
            <th>Année</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {educationList.map((edu) => (
            <tr key={edu._id}>
              <td>{edu.degree}</td>
              <td>{edu.university}</td>
              <td>{edu.year}</td>
              <td>{edu.description}</td>
              <td>
                <button
                  className="btn edit"
                  onClick={() => {
                    setEditingEdu(edu);
                    setShowForm(true);
                  }}
                >
                  Modifier
                </button>
                <button
                  className="btn delete"
                  onClick={() => handleDelete(edu._id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <EducationForm
          initialData={editingEdu}
          onSubmit={editingEdu ? handleEdit : handleAdd}
          onCancel={() => {
            setShowForm(false);
            setEditingEdu(null);
          }}
        />
      )}
    </div>
  );
};

export default EducationDashboard;
