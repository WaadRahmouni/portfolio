import React, { useState, useEffect } from "react";

const ProjectForm = ({ initialData, onSubmit, onCancel }) => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");
  const [website, setWebsite] = useState("");
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (initialData) {
      setProjectName(initialData.projectName);
      setDescription(initialData.description);
      setGithub(initialData.github);
      setWebsite(initialData.website);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("projectName", projectName);
    formData.append("description", description);
    formData.append("github", github);
    formData.append("website", website);
    if (photo) formData.append("projectPhoto", photo);

    onSubmit(formData);
  };

  return (
    <div className="EducationForm">
      <form className="form" onSubmit={handleSubmit}>
        <h3>{initialData ? "Modifier Projet" : "Ajouter Projet"}</h3>

        <input
          placeholder="Nom du projet"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          placeholder="Lien GitHub"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <input
          placeholder="Site web"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setPhoto(e.target.files[0])}
        />

        <div className="actions">
          <button type="submit">Enregistrer</button>
          <button type="button" onClick={onCancel}>Annuler</button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
