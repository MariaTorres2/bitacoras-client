import axios from 'axios';

export const login = async (email, password) => {
  try {
    const response = await axios.post('/api/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error en login:', error.response?.data || error.message);
    throw error.response?.data?.error || 'Error al iniciar sesión';
  }
};

export const register = async (data) => {
  try {
    const response = await axios.post('/api/registrar', data);
    return response.data;
  } catch (error) {
    console.error('Error en register:', error.response?.data || error.message);
    throw error.response?.data?.error || 'Error al registrar el usuario';
  }
};
