import '../Styles/navigationStyles.css';
import logo from '../images/kcc_logo.png';

const Navigation = () => {
    return ( 
        <div className="navigation">
            
            <ul>
            <div className="logo">
            <a href="https://kcc.dk/" target="_blank"><img src={logo} alt="Girl in a jacket" width="150" height="40" /></a>
            </div>
            <li>Commerce & Culture</li>
            <li>Om KCC</li>
            <li>Kalender</li>
            <li>Copenhagen Christmas</li>
            <li>Bliv Medlem</li>
            </ul>
        </div>
     );
}
 
export default Navigation;