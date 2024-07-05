import './App.css';
import Navbar from './components/Navbar';

import Dashboard from './pages/Dashboard';
import NetAssets from './pages/NetAssets';

import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const AppRouter = () => {
  let routes = useRoutes([
    { path: '/', element: <Dashboard/> },
    { path: 'net-assets', element: <NetAssets/> }
  ])

  return routes;
}

function App() {
  return (
    <Router>
      <Navbar/>
      <AppRouter/>
    </Router>
  );
}

export default App;
