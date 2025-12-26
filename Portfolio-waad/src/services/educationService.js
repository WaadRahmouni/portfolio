import axios from "axios";

const API_URL = "/api/education";

export const getEducation = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// (optionnel si tu veux un dashboard admin)
export const createEducation = async (data) => {
  const res = await axios.post(API_URL, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return res.data;
};

export const updateEducation = async (id, data) => {
  const res = await axios.put(`${API_URL}/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return res.data;
};

export const deleteEducation = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return res.data;
};
