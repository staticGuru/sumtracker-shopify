import axios from "axios";

export const getProductList = async () => {
  const config = {
    headers: { Authorization: `Token ${import.meta.env.VITE_AUTH_TOKEN}` },
  };
  return await axios
    .get(`${import.meta.env.VITE_BASE_URL}/products/?&limit=25`, config)
    .then((res) => res.data);
};
