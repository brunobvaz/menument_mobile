import { useState, useEffect } from 'react';
import api from '../services/api';

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
    fetchRecipes();
  }, []);


  const fetchRecipes = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.get('/recipes');
      const activeRecipes = response.data.filter(recipe => recipe.active !== false);
      setRecipes(activeRecipes);
      console.log("active rec...", activeRecipes)
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Erro ao carregar receitas');
    } finally {
      setLoading(false);
    }
  };


  const getRecipeById = async (id) => {
    try {
      const response = await api.get(`/recipes/${id}`);
      return { success: true, data: response.data };
    } catch (err) {
      console.error(err);
      return { success: false, error: err.response?.data?.message || 'Erro ao buscar a receita' };
    }
  };


  return {
    recipes,
    loading,
    error,
    refetch: fetchRecipes,
    getRecipeById,
  };
};

export default useRecipes;