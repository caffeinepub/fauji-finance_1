import { Outlet, useSearch } from '@tanstack/react-router';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import StickyContactBar from './StickyContactBar';
import ProductionDiagnostics from './ProductionDiagnostics';

export default function SiteLayout() {
  // Enable diagnostics panel with ?diagnostics=1 query parameter
  const search = useSearch({ from: '__root__' }) as { diagnostics?: string };
  const showDiagnostics = search?.diagnostics === '1';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>
      <SiteFooter />
      <StickyContactBar />
      {showDiagnostics && <ProductionDiagnostics />}
    </div>
  );
}
