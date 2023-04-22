import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import AppContext from "./context/AppContext.js";

import SharedLayout from "./components/SharedLayout.js";
import Home from "./pages/Home.js";

const App = () => {
    const {setPostsData} = useContext(AppContext)

    //create http request for posts
    useEffect(() => {
        const getPosts = async () => {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            const filteredData = data.filter(posts => posts.userId === 1)
            setPostsData(filteredData)
            console.log(filteredData)
        }
        getPosts()
    }, [])

    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}

export default App;