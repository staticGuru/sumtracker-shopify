import axios from "axios";

export const getProductList = async (page = 0, contact) => {
  console.log("getProductList====>", page, contact);
  if (page == 1) {
    page = 0;
  }
  const config = {
    headers: { Authorization: `Token ${import.meta.env.VITE_AUTH_TOKEN}` },
  };
  return await axios
    .get(
      `${import.meta.env.VITE_BASE_URL}/products/?&limit=25&offset=${page}${
        contact ? `&contact=${contact}` : ""
      }`,
      config
    )
    .then((res) => res.data);
};

export const getContactsList = async (searchText = "") => {
  const config = {
    headers: { Authorization: `Token ${import.meta.env.VITE_AUTH_TOKEN}` },
  };
  return await axios
    .get(
      `${import.meta.env.VITE_BASE_URL}/contacts/?search=${searchText}`,
      config
    )
    .then((res) => res.data);
};
