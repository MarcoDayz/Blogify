import { useContext } from "react";
import AppContext from "../context/AppContext";
import BlogCard from "./BlogCard";

const Blogs = () => {
    const {postsData} = useContext(AppContext)


    return (
        <div className="blog-ctn">
            <h1>
                blog container
            </h1>
            {postsData.map((post, index) => (
                <BlogCard title={post.title} key={index} />
            ))}
        </div>
    )
}

export default Blogs;