import '../Styles/navigationStyles.css';
import logo from '../images/kcc_logo.png';

const Navigation = () => {
    return (
        <div className="navigation">

            <ul>
                <div className="logo">
                    <a href="https://kcc.dk/" target="_blank"><img src={logo} alt="Girl in a jacket" width="150" height="40" /></a>
                </div>
                <div className="dropdown">
                <li className="dropdown-button">Commerce & Culture</li>
                <div class="dropdown-content">
                    <a href="https://kcc.dk/service/byens-udvikling/">Byens Udvikling</a>
                    <a href="https://kcc.dk/service/radgivning/">Rådgivning</a>
                    <a href="https://kcc.dk/service/projekter/">Projekter</a>
                    <a href="https://kcc.dk/service/netvaerk/">Netværk</a>
                    <a href="https://kcc.dk/nyheder/">Nyheder</a>
                    <a href="https://kcc.dk/magasin-kbh-by-kcc/">Magasin</a>
                </div>
                </div>
                <li>Om KCC</li>
                <li>Kalender</li>
                <li>Copenhagen Christmas</li>
                <li>Bliv Medlem</li>
            </ul>
        </div>
    );
}

export default Navigation;