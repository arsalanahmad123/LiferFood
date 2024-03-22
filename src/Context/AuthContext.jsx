import { useContext, createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    const [accessToken, setAccessToken] = useState(null)
    const [loading, setIsLoading] = useState(false)

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        const storedToken = localStorage.getItem('access_token')

        if (storedUser != null && storedToken != null) {
            const userData = JSON.parse(storedUser)
            const token = JSON.parse(storedToken)
            const now = new Date().getTime()
            const expirationTime = userData.expirationTime

            if (now < expirationTime) {
                setUser(userData)
                setAccessToken(token)
                setLoggedIn(true)
            } else {
                logoutUser()
            }
        }
    }, [])

    const toggleLoggedIn = (isLoggedIn) => {
        setLoggedIn(isLoggedIn)
        if (!isLoggedIn) {
            logoutUser()
        }
    }

    const signupUser = (userData) => {
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
    }

    const loginUser = (userData, token) => {
        const expirationTime = new Date().getTime() + 1000 * 60 * 60 * 24 // 24 hours
        userData.expirationTime = expirationTime
        setUser(userData)
        setAccessToken(token)
        localStorage.setItem('restaurant', JSON.stringify(userData?.role_data))
        localStorage.setItem('user', JSON.stringify(userData))
        localStorage.setItem('access_token', JSON.stringify(token))
        localStorage.setItem('loggedIn', true)
        setLoggedIn(true)
    }

    const logoutUser = () => {
        setUser(null)
        setAccessToken(null)
        localStorage.removeItem('user')
        localStorage.removeItem('access_token')
        localStorage.removeItem('loggedIn')
        localStorage.removeItem('restaurant')
        setLoggedIn(false)
        window.location.reload()
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                loggedIn,
                toggleLoggedIn,
                loginUser,
                logoutUser,
                loading,
                setIsLoading,
                signupUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
