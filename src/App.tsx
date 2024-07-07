import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import NavbarDesktop from './components/NavbarDesktop';

import Dashboard from './pages/Dashboard';
import NetAssets from './pages/NetAssets';

import { RouterContainer } from './styles/dashboard';
import useScreenQuery from "./hooks/useScreenQuery";

const AppRouter = () => {
  let routes = useRoutes([
    { path: '/', element: <Dashboard/> },
    { path: 'net-assets', element: <NetAssets/> }
  ])

  return routes;
}

function App() {
  const { isMobile, isDesktop } = useScreenQuery();

  return (
    <Router>
      <RouterContainer>
        {isMobile && <Navbar/>}
        <div className='content-container'>
          {isDesktop && <NavbarDesktop/>}
          <div className='flex-grow'>
            <AppRouter/>
          </div>
        </div>
      </RouterContainer>
    </Router>
  );
}

export default App;
