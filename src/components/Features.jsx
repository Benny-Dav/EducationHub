import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
    return (
        <div className="features-div">
            <div className="feature1">
                <div className="feature-learn-icon">
                    <FontAwesomeIcon icon={faChalkboard} color="white" fontSize="3em"/>
                    </div>
                <div className="feature-text">
                    <h2>Learn</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </div>
            <div className="feature2">
            <div className="feature-learn-icon">
                    <FontAwesomeIcon icon={faChalkboard} color="white" fontSize="3em" />
                    </div>
                <div className="feature-text">
                    <h2>Play</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </div>
            <div className="feature3">
            <div className="feature-learn-icon">
                    <FontAwesomeIcon icon={faChalkboard} color="white" fontSize="3em"/>
                    </div>
                <div className="feature-text">
                    <h2>Meal</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </div>
        </div>
    );
}

export default Features;