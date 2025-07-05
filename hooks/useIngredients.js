import { useState, useEffect } from 'react';
import api from '../services/api';

const useIngredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔄 GET
  const fetchIngredients = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.get('/ingredients');
      const activeIngredients = response.data.filter(ingredient => ingredient.status === true);
      setIngredients(activeIngredients);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Erro ao carregar ingredientes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  const fetchIngredientsByIds = async (ingredientList) => {
    try {
      const response = await api.get('/ingredients');
      const allIngredients = response.data;
      const enriched = ingredientList.map(item => {
        const full = allIngredients.find(i => i._id === item.ingredientId);
        return {
          ...item,
          name: full?.name || 'Desconhecido',
          color: full?.color || '#000',
          image: full?.image || ''
        };
      });
      return enriched;
    } catch (err) {
      console.error('Erro ao buscar ingredientes por ID:', err);
      return ingredientList.map(i => ({ ...i, name: 'Erro', unit: '', color: '#000' }));
    }
  };


  return {
    ingredients,
    loading,
    error,
    refetch: fetchIngredients,
    fetchIngredientsByIds,
  };
};

export default useIngredients;

