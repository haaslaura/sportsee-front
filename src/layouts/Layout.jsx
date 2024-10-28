import { Outlet } from "react-router-dom"
import SecondNavBar from "./SecondNavBar"

function Layout() {
    return (
        <main>
            <SecondNavBar />
            <div className="main-container">
                <Outlet />
            </div>
        </main>
    )
}

export default Layout