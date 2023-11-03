import { useContext } from "react"
import AdminHeader from "./AdminHeader"
import AdminFooter from "./AdminFooter"
import Header from "../Header"
import { Navigate, Outlet } from "react-router-dom"

// Contextprovider som udbyder om der er logget ind
import { LoginContext } from "../../context/LoginContext"

const AdminLayout = () => {

  // USER NEEDS TO BE LOGGED IN TO CONTINUE TOWARDS OTHER ADMIN PAGES
  // IF THE USER IS NOT LOGGED IN => SEND TO LOGIN PAGE

  const {adminUser} = useContext(LoginContext)

  if(!adminUser) {
    return <Navigate to="/login" replace/>
  }

  return (
    <>
      <AdminHeader/>
      
        <main>
          <Outlet />
        </main>

      <AdminFooter/>
    </>
  )
}

export default AdminLayout