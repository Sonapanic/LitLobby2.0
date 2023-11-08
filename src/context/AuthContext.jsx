import { createContext, useState } from "react";
import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify'




const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [newUser, setNewUser] = useState(false)

    const showToast = (message) => {
        toast(message)
      }
    const renderUrl = "https://litlobby.onrender.com";
    const localUrl = "http://localhost:10000";


    return <AuthContext.Provider value={{
        currentUser,
        setCurrentUser,
        newUser,
        setNewUser,
        showToast,
        renderUrl,
        localUrl
    }}>
        {children}
    </AuthContext.Provider>
}














export default AuthContext
