import axios from 'axios'

export const axiosWithAuth = ()=> {
  const token = localStorage.getItem('token');
  return axios.create({
      headers: {
          Authorization: `Bearer ${token}`
      }
  });
};

export const axiosLoginAuth = () => {
  return axios.create({
    headers: {
      Authorization: "Bearer 56ab5075-de2e-43ba-a407-e52b8f267ac7"
    }, baseURL: "https://simpsonsays.herokuapp.com/"
  });
};
