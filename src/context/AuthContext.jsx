import { createContext, useState } from "react";




const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [newUser, setNewUser] = useState(false)


    return <AuthContext.Provider value={{
        currentUser,
        setCurrentUser,
        newUser,
        setNewUser
    }}>
        {children}
    </AuthContext.Provider>
}














export default AuthContext
