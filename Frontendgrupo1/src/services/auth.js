export const TOKEN_KEY = "@gamecasting-Token";
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const login = (token) =>{
    sessionStorage.setItem(TOKEN_KEY,token);
};
export const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
}