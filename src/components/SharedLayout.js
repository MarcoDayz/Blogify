import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.js";
import Sidebar from "./Sidebar.js";

const SharedLayout = () => {

    return (
        <div id="App">
            <Navbar />
            <Sidebar />
            <div className="main-ctn">
                <Outlet />
            </div>
        </div>
    )
}

export default SharedLayout;