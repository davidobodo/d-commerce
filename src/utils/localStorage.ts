export const setLocalStorage = (payload) => {
    console.log(payload);
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
    const refreshToken = localStorage.getItem("refreshToken");
    const expirationTime = localStorage.getItem("expirationDate");
    return { token, userId, refreshToken, expirationTime };
};

export const clearLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationDate");
};
