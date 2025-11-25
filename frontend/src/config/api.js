// Конфигурация API
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const API_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/products`,
  UPLOAD: `${API_BASE_URL}/api/upload`,
  BANNERS: `${API_BASE_URL}/banners`,
  GROUPS: `${API_BASE_URL}/groups`,
};

export default API_BASE_URL;

