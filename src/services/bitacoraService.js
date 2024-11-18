import axios from 'axios';

export const getAll = async () => {
  try {
    const response = await axios.get('/api/bitacora');
    return response.data;
  } catch (error) {
    console.error('Error al obtener las bitacoras:', error.response?.data || error.message);
    throw error.response?.data?.error || 'Error al obtener las bitacoras';
  }
};

export const getOne = async (id) => {
  try {
    const response = await axios.get(`/api/bitacora/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener la bitacora:', error.response?.data || error.message);
    throw error.response?.data?.error || 'Error al obtener la bitacora';
  }
};

export const create = async (data) => {
  try {
    const response = await axios.post('/api/bitacora', data);
    return response.data;
  } catch (error) {
    console.error('Error al crear la bitacora:', error.response?.data || error.message);
    throw error.response?.data?.error || 'Error al crear la bitacora';
  }
};

export const update = async (id, data) => {
  try {
    const response = await axios.put(`/api/bitacora/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar la bitacora:', error.response?.data || error.message);
    throw error.response?.data?.error || 'Error al actualizar la bitacora';
  }
};

export const deleteOne = async (id) => {
  try {
    const response = await axios.delete(`/api/bitacora/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar la bitacora:', error.response?.data || error.message);
    throw error.response?.data?.error || 'Error al eliminar la bitacora';
  }
};