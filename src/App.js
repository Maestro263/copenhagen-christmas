import './Styles/App.css';
import Copenhagenparagraph from './Components/Copenhagenparagraph';
import Navigation from './Components/Navigation';
import Coverimg from './Components/Coverimg';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Coverimg />
      <div>
   <h1>Copenhagen Christmas</h1>
   </div>
   <Copenhagenparagraph />
   <Footer />
    </div>
  );
}

export default App;
