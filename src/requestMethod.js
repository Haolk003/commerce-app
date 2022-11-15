import axios from "axios";
const  BASE_URL="http://localhost:5000/api";
const TOKEN=JSON.parse(localStorage.getItem('userAdminCommerce'))?.token_access;

export const publicMethod=axios.create({
    baseURL:BASE_URL,
});
export const userRequest=axios.create({
    baseURL:BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
})