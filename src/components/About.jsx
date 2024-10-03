import aboutPic from "../assets/images/hero_bg_2.jpg";
const About = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <div className="about-txt">
                    <h1 className="about-txt-h1">About Us</h1>
                    <p className="about-txt-p">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <ul className="about-ul">
                        <li className="about-bullet">Separated they live</li>
                        <li className="about-bullet">Bookmarksgrove right at the coast</li>
                        <li className="about-bullet">large language ocean</li>
                    </ul>
                </div>
                <div className="about-img">
                    <img src={aboutPic} alt="" srcSet="" />
                </div>
            </div>

        </section>
    );
}
export default About;