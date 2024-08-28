import './App.css';
import MainPage from './pages/MainPage';
import { cn } from "./lib/utils";
import DotPattern from "./components/magicui/dot-pattern";

function App() {
  return (
    <div className="App">
        <div className="App-container">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
