const tokenLength = Math.random() * 1000
console.log(`There are currently ${tokenLength} happy persons near you`)

const login = (email, password) => {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regexEmail.test(String(email).toLowerCase()) && password.length >= 8
}

const logout = () => {
    console.log('deleted token')
    return true
}

const isAuthorized = (token) => {
    return token.length === tokenLength
}

const generateAuthToken = () => {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return [...Array(tokenLength).keys()]
        .reduce((acc, cur) => acc + possible.charAt(Math.floor(Math.random() * possible.length)), "")
}

export const Auth = {
    login,
    isAuthorized,
    generateAuthToken,
    logout,
}