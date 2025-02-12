import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = localStorage.getItem("loggedin");
    console.log("checking " + isLoggedIn)
    if (!isLoggedIn) {
        const response = redirect("/Van-Life/login?message=You must login first")
        response.body = true
        throw response
    }
}