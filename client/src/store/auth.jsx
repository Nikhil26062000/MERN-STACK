import { createContext, useContext, useEffect, useState } from "react";

//Creating context
export const AuthContext = createContext();


//Creating Provider
export const AuthProvider = ({children}) => {

    const [token,setToken] = useState(localStorage.getItem('userToken'));

  

    const storeTokenInLocalStorage = (serverToken) =>{
        setToken(serverToken);
        return localStorage.setItem("userToken",serverToken);
    }

    // let isloggedIn = !!token; //?this line will set the value of isloggedIn. if token present isloggedIn will be true else false
   

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem('userToken');
    }
    return(
        <AuthContext.Provider value={{storeTokenInLocalStorage,LogoutUser,token}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    const authContextValue = useContext(AuthContext); 
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}