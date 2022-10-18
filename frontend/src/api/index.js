// export const foodRequest = {

import { Axios } from "../config";

// }

export const authRequest = {
  register: (formData) => {
    return Axios.post("/auth/register", formData);
  },
  login: (formData) => {
    return Axios.post("/auth/login", formData);
  },
};
