const DashboardHeader = ({ title, onAdd }) => {
  return (
    <div className="dashboardHeader">
      <h1>{title}</h1>
      <button className="btn add" onClick={onAdd}>
        + Ajouter
      </button>
    </div>
  );
};

export default DashboardHeader;
