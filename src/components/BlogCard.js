const BlogCard = ({title}) => {

    return(
        <div className="blog-card">
            <div className="blog-img"></div>
            <h3 className="blog-titles">{title}</h3>
        </div>
    )
};

export default BlogCard;