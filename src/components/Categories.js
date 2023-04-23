import { useContext } from "react";
import AppContext from "../context/AppContext.js";
import PopArticleCard from "./PopArticleCard.js";

const Categories = () => {
    const {postsData, showArticles} = useContext(AppContext)

    return (
        <>
        {showArticles?
        <div className="cat-ctn">
            <div>
                <h2>Popular Articles</h2>
            </div>
            <div className="pop-articles">
                {postsData.map((post, index) => {
                    if(post.id < 4){
                        return(
                            <PopArticleCard i={index} post={post} key={index}/>
                        )
                    }
                })}
            </div>
        </div>
        :
        null
        }
        </>
    )
};

export default Categories;