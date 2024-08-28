import About from '../components/About';
import Competenze from '../components/Competenze';
import Contatti from '../components/Contatti';
import Lavori from '../components/Lavori';
import Statement from '../components/Statement';
import Title from '../components/Title';
import './styles/MainPage.css';

function MainPage() {
  return (
    <div className="MainPage">
      <Title />
      <About />
      <Statement />
      <Competenze />
      <Lavori />
      <Contatti />
    </div>
  );
}

export default MainPage;
