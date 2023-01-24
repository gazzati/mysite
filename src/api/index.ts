import axios from "axios"

import config from "@root/config"

export const api = axios.create({
  withCredentials: true,
  baseURL: `${config.dbHost}/api`,
  headers: {
    "Content-Type": "application/json"
  }
})
