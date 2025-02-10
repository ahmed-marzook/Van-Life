import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = true
    console.log("checking " + isLoggedIn)
    if (!isLoggedIn) {
        const response = redirect("/Van-Life/login")
        response.body = true
        throw response
    }
}