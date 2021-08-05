import coverimg from '../images/Julebillede.jpeg';
import '../Styles/coverimgStyles.css';



const Coverimg = () => {

    return ( 
        <div>
            <img className="coverimg" src={coverimg} alt="Christmas in Copenhagen" />
        </div>
     );
}
 
export default Coverimg;