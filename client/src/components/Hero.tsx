
import { useHistory } from 'react-router-dom';

function Hero() {
    const history = useHistory();
    const handleClick = () => history.push('/dashboard');

    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Cerebro reporting system
                </h1>
                <h2 className="hero-subtitle">
                    locate, assess and control any cosmos entity
                </h2>
                <button type="button" className="hero-button" onClick={handleClick}>
                    New connection &raquo;
                </button>
            </div>
        </section >
    );
}

export default Hero;

