export function saveAuthTokens({ accessToken, refreshToken }) {
localStorage.setItem("accessToken", accessToken);
localStorage.setItem("refreshToken", refreshToken);
}

export function getAccessToken() {
return localStorage.getItem("accessToken");
}

export function clearTokens() {
localStorage.removeItem("accessToken");
localStorage.removeItem("refreshToken");
}