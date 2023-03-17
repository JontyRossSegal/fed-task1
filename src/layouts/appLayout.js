import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import AppFoot from "../components/appFoot"

export default function AppLayout(){
    return(
      <>
      <NavBar />
      <Outlet />
      <AppFoot />
      </>
    )
  }