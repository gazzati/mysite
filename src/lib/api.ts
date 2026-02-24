import axios from "axios"

export const api = axios.create({
  withCredentials: true,
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
})
