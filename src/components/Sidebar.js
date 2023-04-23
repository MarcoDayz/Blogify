import { useContext, useState } from "react";
import HomeCard from "./HomeCard";
import AppContext from "../context/AppContext";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const {sidebarList, showSidebar, showList, setShowList} = useContext(AppContext)
    const {pathname} = useLocation()

    const [subEmail, setSubEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubEmail("")
    }

    const handleChange = (e) => {
        setSubEmail(e.target.value)
    }

    return (
        <>
        { showSidebar?
            <div className="sidebar-ctn">
                <HomeCard />
                <div className="links-wrapper">
                    {sidebarList.map((item, index) => (
                        // <li className="sb-li" key={index}>{item.name}</li>
                        <Link className="sb-li"
                        to={item.path}
                        id={pathname === item.path? "active" : ""}
                        key={index}>
                            {item.name}
                        </Link>
                    ))}
                </div>

                <form className="sub-form" onSubmit={handleSubmit}>
                    <h3>Subscribe Newsletter</h3>
                    <p className="sub-i">Get the latest news!</p>
                    <input className="input-sub" type="email" placeholder="Email" value={subEmail} onChange={handleChange} />
                    <input className="sub-btn" type="submit" value="Subscribe" />
                </form>
            </div>
            :
            <div className={showList? "dropList-ctn-true" : "dropList-ctn-false"}>
            {/* <HomeCard /> */}
            <div className="links-wrapper">
                {sidebarList.map((item, index) => (
                    <Link className="sb-li"
                        to={item.path}
                        id={pathname === item.path? "active" : ""}
                        key={index}
                        onClick={() => setShowList(false)}>
                            {item.name}
                    </Link>
                ))}
            </div>

            {/* <form className="sub-form" onSubmit={handleSubmit}>
                <h3>Subscribe Newsletter</h3>
                <p className="sub-i">Get the latest news!</p>
                <input className="input-sub" type="email" placeholder="Email" value={subEmail} onChange={handleChange} />
                <input className="sub-btn" type="submit" value="Subscribe" />
            </form> */}
        </div>
        }
        </>
    )
};

export default Sidebar;