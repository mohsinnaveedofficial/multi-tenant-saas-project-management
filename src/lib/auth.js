let accessToken = null;

export function setAccessToken(token) {
  accessToken = token;
  if (typeof window !== "undefined") {
    try {
      if (token) {
        window.localStorage.setItem("accessToken", token);
      } else {
        window.localStorage.removeItem("accessToken");
      }
    } catch (e) {
   
    }
  }
}

export function getAccessToken() {
  if (accessToken) return accessToken;
  if (typeof window !== "undefined") {
    try {
      accessToken = window.localStorage.getItem("accessToken");
    } catch (e) {
      accessToken = null;
    }
  }
  return accessToken;
}

export function clearAccessToken() {
  accessToken = null;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.removeItem("accessToken");
    } catch (e) {}
  }
}

let refreshToken = null;

export function setRefreshToken(token) {
  refreshToken = token;
  if (typeof window !== "undefined") {
    try {
      if (token) {
        window.localStorage.setItem("refreshToken", token);
      } else {
        window.localStorage.removeItem("refreshToken");
      }
    } catch (e) {
    
    }
  }
}

export function getRefreshToken() {
  if (refreshToken) return refreshToken;
  if (typeof window !== "undefined") {
    try {
      refreshToken = window.localStorage.getItem("refreshToken");
    } catch (e) {
      refreshToken = null;
    }
  }
  return refreshToken;
}

export function clearRefreshToken() {
  refreshToken = null;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.removeItem("refreshToken");
    } catch (e) {}
  }
}
