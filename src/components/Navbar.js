import { useContext } from "react";
import AppContext from "../context/AppContext";

const Navbar = () => {
    const {showList, setShowList} = useContext(AppContext)

    const handleList = () => {
        setShowList(!showList)
    }

    return (
        <header>
                <h2 className="logo-nm">Blogify</h2>
                {/* add switch here */}
                <div className="stack-icon-wrapper" onClick={handleList}>
                    <div className={`stack-ln-1-${showList}`}/>
                    <div className={`stack-ln-2-${showList}`}/>
                    <div className={`stack-ln-3-${showList}`}/>
                </div>
        </header>
    )
};

export default Navbar;