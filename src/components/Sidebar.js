import { useContext, useState } from "react";
import HomeCard from "./HomeCard";
import AppContext from "../context/AppContext";

const Sidebar = () => {
    const {sidebarList, showSidebar} = useContext(AppContext)

    const [subEmail, setSubEmail] = useState(" ")

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
                <ul>
                    {sidebarList.map((item, index) => (
                        <li className="sb-li" key={index}>{item}</li>
                    ))}
                </ul>

                <form className="sub-form" onSubmit={handleSubmit}>
                    <h3>Subscribe Newsletter</h3>
                    <p className="sub-i">Get the latest news!</p>
                    <input className="input-sub" type="email" placeholder="Email" value={subEmail} onChange={handleChange} />
                    <input className="sub-btn" type="submit" value="Subscribe" />
                </form>
            </div>
            :
            null
        }
        </>
    )
};

export default Sidebar;