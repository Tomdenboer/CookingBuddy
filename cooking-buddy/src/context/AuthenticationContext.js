import React, {createContext, useEffect, useState} from "react";

export const AuthenticationContext = createContext(null);

function AuthenticationContextProvider({children}) {
    const [userInfo, setUserInfo] = useState({});

    function isAuthenticated() {
        if(localStorage.getItem("token") != null) {
            return true;
        } else return false;
    }    

    function handleLogout() {
        localStorage.removeItem("token");
    }

    function handleLogin(loginResponse) {
        let token = loginResponse.accessToken;
        delete loginResponse.accessToken;
        localStorage.setItem('token', token);
        setUserInfo(loginResponse);
    }
    return (
        <AuthenticationContext.Provider value={{handleLogin, isAuthenticated, handleLogout}}>
            {children}
        </AuthenticationContext.Provider>
    );
}

export default AuthenticationContextProvider;