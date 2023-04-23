import { useContext } from "react";
import AppContext from "../context/AppContext.js";

const PopArticleCard = ({i, post}) => {
    const {photos} = useContext(AppContext)

    return (
        <div className="article-card">
            <div className="art-img-wrapper">
                <img className="article-img" src={photos[i]}/>
            <div className="art-i">
                <p>{post.title}</p>
                <p className="rd-more">Read</p>
            </div>
            </div>
        </div>
    )
};

export default PopArticleCard;