import React, { createContext, useState } from 'react'
export const AuthContext= createContext();
export default function AuthcontextProvider({children}) {
    const [isLogged, setIsLogged]=useState(false)
    const [logUser,setLogedUser]=useState('')
    const login = (e) => {
        setIsLogged(true);
        setLogedUser(e)
      };
    
      const logout = () => {
        setIsLogged(false);
        setLogedUser('')
      };
      return (
        <AuthContext.Provider value={{ isLogged, login, logout ,logUser,setLogedUser}}>
          {children}
        </AuthContext.Provider>
      );
}