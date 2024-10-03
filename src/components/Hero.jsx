import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
    return (

        <section className="hero">
            
            <div className="overlay">
                <div className="hero-content">
                <div className="hero-txt">
                    <h1 className="hero-txt-1">Learning Center for your kids</h1>
                    <p className = "hero-txt-p">Another free template by Colorlib. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <a href=""><button className="explore-btn">EXPLORE NOW</button></a>
                </div>
                <div>
                    <button className="play-btn"><FontAwesomeIcon icon={faPlay} color="" fontSize="3em"/></button>
                </div>
                </div>
            </div>
        </section>

    );
}
export default Hero;