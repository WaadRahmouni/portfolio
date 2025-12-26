import React, { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import ProjectForm from "./ProjectForm";
import EducationDashboard from "./EducationDashboard";
import ProjectDashboard from "./ProjectDashboard";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject
} from "../../services/projectService";
import "./dashboard.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("projects"); // "projects" ou "education"

  return (
    <div className="dashboard">
      <DashboardSidebar setActiveTab={setActiveTab} activeTab={activeTab} />

      {activeTab === "projects" && <ProjectDashboard />}
      {activeTab === "education" && <EducationDashboard />}
    </div>
  );
};

export default Dashboard;
