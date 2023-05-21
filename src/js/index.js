// Import our custom CSS
import '../scss/style.scss';

// Import components
import './components/index';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import Dashboard from './pages/dashboard';
import Add from './pages/add';

const routes = {
  '/': Dashboard,
  '/add.html': Add,
};

const detectRoute = () => routes[window.location.pathname];

window.addEventListener('DOMContentLoaded', async () => {
  const route = detectRoute();
  route.init();
});
