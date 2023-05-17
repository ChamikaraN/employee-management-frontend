import axios from "axios";
import AuthService from "../services/AuthService";

const apiUrl = process.env.REACT_APP_API_URL;
const authService = new AuthService();

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    let accessToken = authService.getAccessToken();
    if (!accessToken) {
      // Fetch access token from the server
      try {
        const response = await authService.fetchAccessToken();
        accessToken = response.accessToken;
      } catch (error) {
        // Handle error while fetching access token
        console.error(error);
      }
    } else {
      // Check if access token is expired
      const isTokenExpired = authService.isAccessTokenExpired();

      if (isTokenExpired) {
        // Refresh access token
        try {
          const response = await authService.refreshAccessToken();
          accessToken = response.accessToken;
        } catch (error) {
          // Handle error while refreshing access token
          console.error(error);
        }
      }
    }

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
