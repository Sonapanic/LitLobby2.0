import { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import Cookies from 'js-cookie'
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const storedUser = localStorage.getItem('user');
  const [currentUser, setCurrentUser] = useState(storedUser ? JSON.parse(storedUser) : null);
  
  const [newUser, setNewUser] = useState(false);
  const [token, setToken] = useState(null)

  

  useEffect(() => {
    const storedToken = Cookies.get('token')
    if(storedToken) {
      setToken(storedToken)
    }
  }, [])


  const setAuthToken = (newToken) => {
    setToken(newToken)
    Cookies.set('token', newToken, {expires: '1h'})
  }


  const showToast = (message) => {
    toast(message);
  };
  const renderUrl = "https://litlobby.onrender.com";
  const localUrl = "http://localhost:10000";

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        newUser,
        setNewUser,
        showToast,
        renderUrl,
        localUrl,
        token,
        setAuthToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
