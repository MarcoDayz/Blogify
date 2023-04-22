const BlogCard = ({post}) => {

    return(
        <div className="blog-card">
            <div className="blog-img"></div>
            <div className="blog-i">
                <h3 className="blog-titles">{post.title}</h3>
                <div className="blog-ib">
                    <p>Posted Date</p>
                    <p>Cat</p>
                    <p>Comments</p>
                </div>
                <p>{post.body}</p>
                <br/>
                <p className="rd-more">Read More</p>
            </div>
        </div>
    )
};

export default BlogCard;