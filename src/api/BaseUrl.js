import axios from "axios";

export const BaseApiUrl = axios.create({
  baseURL: "http://localhost:3001",
});
