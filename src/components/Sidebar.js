import HomeCard from "./HomeCard";

const Sidebar = () => {
    const list = ["Home","Travel","Food","About","Contact"]

    return (
        <div className="sidebar-ctn">
            <HomeCard />
            <ul>
                {list.map((item, index) => (
                    <li className="sb-li" key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
};

export default Sidebar;