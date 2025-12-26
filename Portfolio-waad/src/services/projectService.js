import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/api/projects`;

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getProjects = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createProject = async (formData) => {
  const res = await axios.post(API_URL, formData, authHeader());
  return res.data;
};

export const updateProject = async (id, formData) => {
  const res = await axios.put(`${API_URL}/${id}`, formData, authHeader());
  return res.data;
};

export const deleteProject = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`, authHeader());
  return res.data;
};
