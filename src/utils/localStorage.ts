export const setLocalStorage = (payload) => {
    const { sessionActive, token, userId, refreshToken, firstName } = payload;
    let expirationDate;
    if (sessionActive) {
        expirationDate = JSON.parse(localStorage.getItem("expirationDate"));
    } else {
        expirationDate = new Date().getTime() + 3600 * 1000;
    }
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("userId", userId);
    localStorage.setItem("userName", firstName);
    localStorage.setItem("expirationDate", JSON.stringify(expirationDate));
};

export const getLocalStorage = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const userName = localStorage.getItem("userName");
    const refreshToken = localStorage.getItem("refreshToken");
    const expirationTime = localStorage.getItem("expirationDate");
    return { token, userId, refreshToken, expirationTime, userName };
};

export const clearLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("userName");
};
