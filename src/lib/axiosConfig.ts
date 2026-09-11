import axios from "axios"

const configuredBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "/api"
const normalizedBaseUrl = configuredBaseUrl.replace(/\/+$/, "")

const apiBaseUrl = normalizedBaseUrl.endsWith("/api")
  ? normalizedBaseUrl
  : `${normalizedBaseUrl}/api`

const API = axios.create({
  baseURL: apiBaseUrl,
  headers: { "Content-Type": "application/json" }
})

export default API