import Blogs from "../components/Blogs.js";

//destructure the prop being passed
const Home = () => {
//pass the data to posts component

    return (
        <div className="home-ctn">
            <Blogs />
            <div className="cat-ctn">
                Categories
            </div>
        </div>
    )
}

export default Home;