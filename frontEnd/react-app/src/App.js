import logo from './logo.svg';
import './App.css';
import Main from './Components/mainComponent';
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Main />
    </HashRouter>
  );
}

export default App;
