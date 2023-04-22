import { useContext } from "react";
import AppContext from "../context/AppContext";
import BlogCard from "./BlogCard";

const Blogs = () => {
    const {postsData} = useContext(AppContext)
    
    return (
        <div className="blog-ctn">
            {postsData.map((post, index) => (
                <BlogCard post={post} key={index} />
            ))}
        </div>
    )
}

export default Blogs;