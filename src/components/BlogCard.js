import { useContext } from "react";
import AppContext from "../context/AppContext";

const BlogCard = ({post, index}) => {
    const {catArr, photos} = useContext(AppContext)
    const todayDate = new Date().toDateString()

    return(
        <div className="blog-card">
            <div className="blog-img">
                <img className="img-i" src={photos[index]} alt="photo" />
            </div>
            <div className="blog-i">
                <h3 className="blog-titles">{post.title}</h3>
                <div className="blog-ib">
                    <p>Posted: {todayDate}</p>
                    <p>{catArr[index]}</p>
                    {/* <p>Comments</p> */}
                </div>
                <p>{post.body}</p>
                <br/>
                <p className="rd-more">Read More</p>
            </div>
        </div>
    )
};

export default BlogCard;