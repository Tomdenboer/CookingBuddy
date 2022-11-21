import React, {createContext, useEffect, useState} from "react";

export const AuthenticationContext = createContext(null);

function AuthenticationContextProvider({children}) {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        console.log(userInfo);
    });

    function handleLogin(loginResponse) {
        let token = loginResponse.accessToken;
        delete loginResponse.accessToken;
        localStorage.setItem('token', token);
        setUserInfo(loginResponse);
    }
    return (
        <AuthenticationContext.Provider value={{handleLogin}}>
            {children}
        </AuthenticationContext.Provider>
    );
}

export default AuthenticationContextProvider;