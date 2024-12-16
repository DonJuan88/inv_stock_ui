import api from "./Api";

export const getBrands = async () => {
  try {
    console.log("API call starting..."); // Confirm this runs
    const response = await api.get("/brands");
    console.log("API Response:", response); // Inspect response
    return response.data.data;
  } catch (error) {
    console.error("Error in API call:", error.message);
    throw error; // Re-throw for further handling
  }
};

export const deleteBrand = async (id) => {
  const response = api.delete(`brands/${id}`);
  return response.data;
};

export const createBrand = async (brand) => {
  const response = api.post("/brands", brand);
  return response.data;
};

export const updateBrand = async (id, brand) => {
  const response = api.put(`brands/${id}`, brand);
  return response.data;
};
