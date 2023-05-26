// Import our custom CSS
import '../scss/style.scss';

// Import components
import './components/index';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import Dashboard from './pages/dashboard';
import Add from './pages/add';
import Register from './pages/register';
import Login from './pages/login';

const routes = {
  '/': Dashboard,
  '/add.html': Add,

  '/login.html': Login,
  '/register.html': Register,
};

const detectRoute = () => routes[window.location.pathname];

window.addEventListener('DOMContentLoaded', async () => {
  const route = detectRoute();
  route.init();
});
