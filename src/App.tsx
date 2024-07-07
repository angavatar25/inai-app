import './App.css';
import Navbar from './components/Navbar';

import Dashboard from './pages/Dashboard';
import NetAssets from './pages/NetAssets';

import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { RouterContainer } from './styles/dashboard';
import NavbarDesktop from './components/NavbarDesktop';
import { useMediaQuery } from 'react-responsive';

const AppRouter = () => {
  let routes = useRoutes([
    { path: '/', element: <Dashboard/> },
    { path: 'net-assets', element: <NetAssets/> }
  ])

  return routes;
}

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isMobile = useMediaQuery({ maxWidth: 1024 });

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
