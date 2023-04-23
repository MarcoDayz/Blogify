import { IconContext } from "react-icons";
import {BsYoutube, BsInstagram,BsTwitter,BsFacebook} from "react-icons/bs";

const About = () => {

    const iconProps = {
        size: 'clamp(1.5em, 2vw, 1.8em)',
        color: 'white'
    }

    return (
        <div className="about-ctn">
            <div className="about-wrapper">
                <img className="aboutPhoto"
                src="https://cdn.pixabay.com/photo/2016/11/29/05/11/adult-1867471_960_720.jpg"/>

            <section className="about-sec">
            <div className="about-icons">
                    <IconContext.Provider value={iconProps}>
                        <div className="icon">
                            <BsYoutube/>
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={iconProps}>
                        <div className="icon">
                            <BsInstagram />
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={iconProps}>
                        <div className="icon">
                        <BsTwitter />
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={iconProps}>
                        <div className="icon">
                        <BsFacebook />
                        </div>
                    </IconContext.Provider>
                </div>
                <h1>About Me</h1>
                <p>
                Lacus luctus accumsan tortor posuere. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Risus quis varius quam quisque id diam. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Quisque id diam vel quam elementum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Eu lobortis elementum nibh tellus. Suspendisse sed nisi lacus sed. Accumsan tortor posuere ac ut consequat semper viverra nam. Eget duis at tellus at urna. Ornare arcu odio ut sem nulla. Quis blandit turpis cursus in. Ante metus dictum at tempor. Venenatis lectus magna fringilla urna. Etiam dignissim diam quis enim. In eu mi bibendum neque egestas congue quisque egestas. Fringilla est ullamcorper eget nulla facilisi. Tristique senectus et netus et malesuada fames ac. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque.</p>
            </section>

            </div>
        </div>
    )
};

export default About;