import axios from "axios";

const BASE_URL = "https://quiet-plains-49049.herokuapp.com";

export const getProducts = () => {
  return axios.get(`${BASE_URL}/products`);
};
