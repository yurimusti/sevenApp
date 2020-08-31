import axios from "axios";

export const getList = () => {
  return new Promise((resolve, reject) => {
    const api = axios
      .get(`https://random-persons.herokuapp.com/users`)
      .then((e) => resolve(e.data))
      .catch((err) => reject(err));
    return api;
  });
};
