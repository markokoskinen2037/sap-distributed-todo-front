export const basePath = process.env.NODE_ENV === "production" ? "https://sap-api-gateway.herokuapp.com" : "http://localhost:3003"



export const getConfig = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
        return {
            headers: { Authorization: `Bearer ${user.token}` }
        }
    } else {
        return {

        }
    }
}