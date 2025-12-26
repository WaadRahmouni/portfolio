import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardSidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login");
  };

  return (
    <div className="dashboardSidebar">
      <ul>
        <li
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => setActiveTab("projects")}
        >
          Projets
        </li>
        <li
          className={activeTab === "education" ? "active" : ""}
          onClick={() => setActiveTab("education")}
        >
          Éducation
        </li>
        <li
          className="logout"
          onClick={handleLogout}
          style={{ marginTop: "auto", color: "#f87171", cursor: "pointer" }}
        >
          Déconnexion
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
