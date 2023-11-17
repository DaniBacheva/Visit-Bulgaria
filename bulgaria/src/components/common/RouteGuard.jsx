import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext" 

export default function RouteGuard ({
    children
})  {

    const { isAuthenticated} = useContext(AuthContext)
    console.log('guard')
    return (
        <>
            {children}
        </>
    )
}