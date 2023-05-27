// Import our custom CSS
import '../scss/style.scss';

// Import components
import './components/index';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import './utils/firebase';
import Dashboard from './pages/dashboard';
import Add from './pages/add';
import Register from './pages/register';
import Login from './pages/login';
import GuestAdd from './pages/guestAdd';

const routes = {
  '/': Dashboard,
  '/add.html': Add,
  '/guestadd.html': GuestAdd,

  '/login.html': Login,
  '/register.html': Register,
};

const detectRoute = () => routes[window.location.pathname];

window.addEventListener('DOMContentLoaded', async () => {
  const route = detectRoute();
  route.init();
});
