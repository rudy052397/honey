import { Outlet } from "react-router-dom"
import Header from "../components/common/header/Header"

const PrimaryLayout = () => {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default PrimaryLayout