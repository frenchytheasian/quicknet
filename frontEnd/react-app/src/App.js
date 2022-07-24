import Main from './Components/mainComponent';
import { HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePage from './pages/profilePage';
import Header from './Components/headerComponent';
import Dashboard from './pages/DashboardPage';
import SwipePage from './pages/SwipePage';

function App() {
  return (
    <HashRouter>
      {/* <Main /> */}
      {/* <ProfilePage />  */}
      {/* <Header expand="md" /> */}
      {/* <Dashboard /> */}
      <SwipePage />
    </HashRouter>
  );
}

export default App;
