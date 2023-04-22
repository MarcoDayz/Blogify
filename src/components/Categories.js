import { useContext } from "react";
import AppContext from "../context/AppContext";

const Categories = () => {
    const {postsData, photos} = useContext(AppContext)

    return (
        <div className="cat-ctn">
            <div>
                <h2>Popular Articles</h2>
            </div>
            <div className="pop-articles">
                {postsData.map((post, index) => {
                    if(post.id < 4){
                        return(
                            <div className="article-card" key={index}>
                                <div className="art-img-wrapper">
                                    <img className="article-img" src={photos[index]}/>
                                </div>
                                <p>{post.title}</p>
                                <p className="rd-more">Read</p>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
};

export default Categories;