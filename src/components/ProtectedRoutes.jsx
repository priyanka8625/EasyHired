import { useUser } from "@clerk/clerk-react"
import { useLocation, Navigate } from "react-router-dom"


const ProtectedRoutes = ({children}) => {

    const {isSignedIn, user, isLoaded} = useUser()
    const {pathname} = useLocation()

    //check if user is signed in
    if(isLoaded && !isSignedIn && isSignedIn!==undefined){
        return <Navigate to='/?sign-in=true'/>
    }
    //check user's onboarding status
    if(user && !user?.unsafeMetadata?.role && pathname!=='/onboarding'){
      return <Navigate to='/onboarding'/>
    }

  return children
}

export default ProtectedRoutes
