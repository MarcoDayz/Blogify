import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import AppContext from "./context/AppContext.js";

import SharedLayout from "./components/SharedLayout.js";
import Home from "./pages/Home.js";

const App = () => {
    const {setPostsData, postsData, setShowArticles} = useContext(AppContext)

    //create http request for posts
    useEffect(() => {
        const getPosts = async () => {
            if(postsData.length === 0){
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            const filteredData = data.filter(posts => posts.userId === 1)
            setPostsData(filteredData)
            // console.log(filteredData)
            }
        }
        getPosts()
        const windowResize = () => {
            // console.log(window.innerWidth)
            if(window.innerWidth < 1140){
                setShowArticles(false)
            }else{
                setShowArticles(true)
            }
        }
        return () => addEventListener("resize", windowResize)
    })

    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}

export default App;