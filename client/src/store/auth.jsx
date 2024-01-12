import { createContext, useContext, useEffect, useState } from "react";

//Creating context
export const AuthContext = createContext();


//Creating Provider
export const AuthProvider = ({children}) => {

    const [token,setToken] = useState(localStorage.getItem('userToken'));
    const [istrue,setIsTruue] = useState(false);
    const [user,setUser] = useState("");

  

    const storeTokenInLocalStorage = (serverToken) =>{
        setToken(serverToken);
        setIsTruue(true);
        return localStorage.setItem("userToken",serverToken);
    }

    //?Getting user data from backend
    const userAuthentication =async () =>{
        try {
            const response = await fetch('http://localhost:5000/api/auth/user',{
                method: 'GET',
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            if(response.ok){
                const data = await response.json();
                console.log(data.userData);
                setUser(data.userData);
            }
        } catch (error) {
            console.log("Error while fetching user data from backend",error);
        }
    }

    useEffect(()=>{
        userAuthentication();
    },[istrue])

    // let isloggedIn = !!token; //?this line will set the value of isloggedIn. if token present isloggedIn will be true else false
   

    const LogoutUser = () => {
        setToken("");
        setIsTruue(false);
        setUser("")
        return localStorage.removeItem('userToken');
    }
    return(
        <AuthContext.Provider value={{storeTokenInLocalStorage,LogoutUser,token,user}}>
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