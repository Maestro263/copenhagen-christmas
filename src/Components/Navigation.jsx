import '../Styles/navigationStyles.css';
import logo from '../images/kcc_logo.png';

const Navigation = () => {
    return (
        <div className="navigation">

            <ul>
                <div className="logo">
                    <a href="https://kcc.dk/"><img src={logo} alt="Girl in a jacket" width="150" height="40" /></a>
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
                <div className="dropdown">
                <li className="dropdown-button">Om KCC</li>
                <div class="dropdown-content">
                    <a href="https://kcc.dk/om-kbh-k/">Om KCC</a>
                    <a href="https://kcc.dk/kcc-i-medierne/">KCC i medierne</a>
                    <a href="https://kcc.dk/kontakt-kbh-k/">Kontakt</a>
                    <a href="https://kcc.dk/commerce-culture/">Medlemmer</a>
                    <a href="https://kcc.dk/abningstider-2-2/">Åbningstider</a>
                    <a href="https://kcc.dk/maerkesager/">Mærkesager</a>
                    <a href="https://kcc.dk/organisation/">Organisation</a>

                </div>
                </div>
                <a href="https://kcc.dk/events/"><li>Kalender</li></a>
                <li className="active-page">Copenhagen Christmas</li>
                <a href="https://kcc.dk/medlemsskab/"><li>Bliv Medlem</li></a>
            </ul>
        </div>
    );
}

export default Navigation;