import axios from "axios"

export const api = axios.create({
  withCredentials: true,
  baseURL: "https://gazzzati.ru/api",
  headers: {
    "Content-Type": "application/json",
  },
})
