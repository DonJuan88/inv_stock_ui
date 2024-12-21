import api from "./Api";

export const getBranchs = async () => {
  try {
    console.log("API call starting..."); // Confirm this runs
    const response = await api.get("/branchs");
    console.log("API Response:", response); // Inspect response
    return response.data.data;
  } catch (error) {
    console.error("Error in API call:", error.message);
    throw error; // Re-throw for further handling
  }
};

export const deleteBranch = async (id) => {
  const response = api.delete(`branchs/${id}`);
  return response.data;
};

export const createBranch = async (branch) => {
  const response = api.post("/branchs", branch);
  return response.data;
};

export const updateBranch = async (id, branch) => {
  const response = api.put(`branchs/${id}`, branch);
  return response.data;
};
