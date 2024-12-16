import { useState, useEffect } from "react";
import {
  getBrands,
  createBrand,
  updateBrand,
  deleteBrand,
} from ".././inventory/Brand";

export const useBrand = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Brands
  const fetchBrands = async () => {
    setLoading(true);
    try {
      const data = await getBrands();
      setBrands(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Create Brand
  const addBrand = async (brand) => {
    try {
      const newBrand = await createBrand(brand);
      setBrands((prev) => [...prev, newBrand]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Update Brand
  const editBrand = async (id, brand) => {
    try {
      const updatedBrand = await updateBrand(id, brand);
      setBrands((prev) => prev.map((b) => (b.id === id ? updatedBrand : b)));
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete Brand
  const removeBrand = async (id) => {
    try {
      await deleteBrand(id);
      setBrands((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return {
    brands,
    loading,
    error,
    addBrand,
    editBrand,
    removeBrand,
    fetchBrands,
  };
};
