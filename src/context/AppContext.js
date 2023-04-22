import { createContext, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [postsData, setPostsData] = useState([]);

    const catArr = [
        "Travel",
        "Food",
        "Fashion",
        "Technology",
        "Politics",
        "Lifestyle",
        "Movies",
        "Newsletter",
        "Business",
        "Finance"
    ]

    const sidebarList = [
        "Home",
        "About",
        "Contact"
    ]


    return (
        <AppContext.Provider
        value={{
            postsData, setPostsData,
            catArr,
            sidebarList
        }}>
            {children}
        </AppContext.Provider>
    )
};

export default AppContext;