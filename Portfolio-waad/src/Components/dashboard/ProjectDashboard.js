import React, { useEffect, useState } from "react";
import ProjectForm from "./ProjectForm";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject
} from "../../services/projectService";
import "./dashboard.css";

const ProjectDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const loadProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleAdd = async (formData) => {
    await createProject(formData);
    setShowForm(false);
    loadProjects();
  };

  const handleEdit = async (formData) => {
    await updateProject(editingProject._id, formData);
    setEditingProject(null);
    setShowForm(false);
    loadProjects();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Supprimer ce projet ?")) {
      await deleteProject(id);
      loadProjects();
    }
  };

  return (
    <div className="dashboardContent">
      <div className="dashboardHeader">
        <h2>Gestion des Projets</h2>
        <button
          onClick={() => {
            setEditingProject(null);
            setShowForm(true);
          }}
        >
          Ajouter un Projet
        </button>
      </div>

      <table className="dashboardTable">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Liens</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((p) => (
            <tr key={p._id}>
              <td>{p.projectName}</td>
              <td>{p.description}</td>
              <td>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {" | "}
                {p.website && (
                  <a href={p.website} target="_blank" rel="noreferrer">
                    Site
                  </a>
                )}
              </td>
              <td>
                <button
                  className="btn edit"
                  onClick={() => {
                    setEditingProject(p);
                    setShowForm(true);
                  }}
                >
                  Modifier
                </button>

                <button
                  className="btn delete"
                  onClick={() => handleDelete(p._id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <ProjectForm
          initialData={editingProject}
          onSubmit={editingProject ? handleEdit : handleAdd}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default ProjectDashboard;
