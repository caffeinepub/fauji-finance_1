import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteLayout from './components/SiteLayout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  contactRoute,
]);

// Normalize basepath for consistent routing across IC deployments
function normalizeBasePath(basePath: string): string {
  if (!basePath || basePath === '/') return '/';
  
  // Ensure leading slash
  let normalized = basePath.startsWith('/') ? basePath : '/' + basePath;
  
  // Remove trailing slash for consistency
  if (normalized.endsWith('/') && normalized.length > 1) {
    normalized = normalized.slice(0, -1);
  }
  
  return normalized;
}

const router = createRouter({ 
  routeTree,
  basepath: normalizeBasePath(import.meta.env.BASE_URL || '/'),
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
