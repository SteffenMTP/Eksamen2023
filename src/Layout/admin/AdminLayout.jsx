import { useContext } from "react"
import AdminHeader from "./AdminHeader"
import AdminFooter from "./AdminFooter"
import Header from "../Header"
import { Navigate, Outlet } from "react-router-dom"

// Contextprovider som udbyder om der er logget ind
import { LoginContext } from "../../context/LoginContext"

const AdminLayout = () => {


  // Brugeren skal være logget ind for at komme videre herfra il de andre adminsider
  // Hvis brugeren IKKE er logget ind => sendes til login-siden

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