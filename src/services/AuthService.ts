import axios from "axios";

const apiUrl: string | undefined = process.env.REACT_APP_API_URL;

class AuthService {
  constructor() {
    this.logout = this.logout.bind(this);
  }

  async fetchAccessToken(): Promise<{ accessToken: string }> {
    try {
      const response = await axios.post(`${apiUrl}/auth`);
      // Save the access token and refresh token in local storage
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      return response.data.accessToken;
    } catch (error) {
      // Handle login error
      console.error(error);
      throw new Error("Failed to fetch access token");
    }
  }

  getAccessToken(): string | null {
    // Retrieve the access token from local storage
    return localStorage.getItem("accessToken");
  }

  isAccessTokenExpired(): boolean {
    const accessToken = this.getAccessToken();
    if (!accessToken) {
      return true; // Access token does not exist, consider it expired
    }

    const tokenParts = accessToken.split(".");
    if (tokenParts.length !== 3) {
      return true; // Invalid access token format, consider it expired
    }

    const payload = JSON.parse(atob(tokenParts[1]));
    const expirationTime = payload.exp * 1000; // Convert expiration time to milliseconds
    const currentTime = Date.now();

    return currentTime > expirationTime;
  }

  async refreshAccessToken(): Promise<{ accessToken: string }> {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      // If refresh token does not exist, clear the access token as well
      this.logout();
      // Refresh token not found, handle the error
      throw new Error("Refresh token not found");
    }

    try {
      const response = await axios.post(`${apiUrl}/auth/refresh-token`, {
        refreshToken,
      });
      const { accessToken } = response.data;

      // Save the new access token in local storage
      localStorage.setItem("accessToken", accessToken);

      return { accessToken };
    } catch (error) {
      // If refresh token expired, clear both tokens
      this.logout();
      // Handle refresh token error
      throw new Error("Failed to refresh access token");
    }
  }

  logout(): void {
    // Remove the access token and refresh token from local storage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
}

export default AuthService;
