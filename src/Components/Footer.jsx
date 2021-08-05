import '../Styles/footerStyles.css';

import { GrInstagram } from 'react-icons/gr';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

let iconStyles = { color: "#c80032", fontSize: "22pt", margin: "10px" };


const Footer = () => {
    return (
        <div className="container">
            <ul className="flexboxOne">
                <p>KBH - Commerce & Culture</p>
                <p>Nørregade 28D, 1. sal</p>
                <p>1165 København K</p>
            </ul>
            <ul>
                <div className="flexboxTwo">
                    <p>Følg os:</p>

                    <div className="flexboxTwo-paragraph">
                        <a href="https://www.facebook.com/cphcitycenter/" target="_blank">
                            <FaFacebookSquare style={iconStyles} />
                        </a>
                        <a href="https://www.instagram.com/cphcitycenter/" target="_blank">
                            <GrInstagram style={iconStyles} />
                        </a>
                        <a href="https://www.linkedin.com/company/34749072" target="_blank">
                            <AiFillLinkedin style={iconStyles} />
                        </a>
                    </div>
                </div>
            </ul>
            <ul className="flexboxThree">
                <p>36 85 66 06</p>
                <p>info@kcc.dk</p>
            </ul>
        </div>
    );
}

export default Footer;