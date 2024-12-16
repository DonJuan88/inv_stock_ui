import api from "./Api";

export const getCategories = async () => {
  try {
    console.log("API call starting..."); // Confirm this runs
    const response = await api.get("/categories");
    console.log("API Response:", response); // Inspect response
    return response.data.data;
  } catch (error) {
    console.error("Error in API call:", error.message);
    throw error; // Re-throw for further handling
  }
};

export const deleteCategory = async (id) => {
  const response = api.delete(`categories/${id}`);
  return response.data;
};

export const createCategory = async (category) => {
  const response = api.post("/categories", category);
  return response.data;
};

export const updateCategory = async (id, category) => {
  const response = api.put(`categories/${id}`, category);
  return response.data;
};
