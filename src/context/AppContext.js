import { createContext, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [postsData, setPostsData] = useState([]);


    return (
        <AppContext.Provider
        value={{
            postsData, setPostsData
        }}>
            {children}
        </AppContext.Provider>
    )
};

export default AppContext;