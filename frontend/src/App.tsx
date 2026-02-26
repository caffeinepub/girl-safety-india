import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet, Link, useNavigate, useRouterState } from '@tanstack/react-router';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { useState } from 'react';
import { Home, Shield, Phone, BookOpen, AlertTriangle, Menu, X } from 'lucide-react';
import HomePage from './pages/HomePage';
import SafetyTipsPage from './pages/SafetyTipsPage';
import HelplinesPage from './pages/HelplinesPage';
import ForBoysPage from './pages/ForBoysPage';
import SOSOverlay from './components/SOSOverlay';
import LanguageSelector from './components/LanguageSelector';

function AppLayout() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sosOpen, setSosOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navItems = [
    { path: '/', label: t('navHome'), icon: Home },
    { path: '/safety-tips', label: t('navSafetyTips'), icon: Shield },
    { path: '/helplines', label: t('navHelplines'), icon: Phone },
    { path: '/for-boys', label: t('navForBoys'), icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-teal shadow-teal">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/assets/generated/app-logo.dim_256x256.png" alt="SafeHer India" className="w-9 h-9 rounded-lg object-cover" />
            <div className="hidden sm:block">
              <div className="text-white font-bold text-lg leading-tight font-poppins">{t('appName')}</div>
              <div className="text-white/70 text-xs leading-tight">{t('appTagline')}</div>
            </div>
            <div className="sm:hidden">
              <div className="text-white font-bold text-base leading-tight font-poppins">{t('appName')}</div>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <LanguageSelector />
            <button
              onClick={() => setSosOpen(true)}
              className="sos-pulse bg-sos text-white font-bold px-3 py-2 rounded-lg text-sm flex items-center gap-1 shadow-sos hover:bg-sos-dark transition-colors"
            >
              <AlertTriangle className="w-4 h-4" />
              <span className="hidden sm:inline">{t('sosButton')}</span>
              <span className="sm:hidden">SOS</span>
            </button>
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block bg-teal-dark border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 flex gap-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                  currentPath === path
                    ? 'text-saffron border-b-2 border-saffron'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-teal-dark border-t border-white/10">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium border-b border-white/10 transition-colors ${
                  currentPath === path
                    ? 'text-saffron bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Bottom nav for mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-border shadow-lg">
        <div className="flex">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2 text-xs font-medium transition-colors ${
                currentPath === path
                  ? 'text-teal'
                  : 'text-muted-foreground hover:text-teal'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="truncate max-w-full px-1">{label}</span>
            </Link>
          ))}
          <button
            onClick={() => setSosOpen(true)}
            className="flex-1 flex flex-col items-center gap-0.5 py-2 text-xs font-bold text-sos"
          >
            <AlertTriangle className="w-5 h-5" />
            <span>SOS</span>
          </button>
        </div>
      </nav>

      {/* Footer */}
      <footer className="bg-teal-dark text-white py-8 mb-16 md:mb-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/assets/generated/app-logo.dim_256x256.png" alt="SafeHer India" className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <div className="font-bold text-saffron font-poppins">{t('appName')}</div>
                <div className="text-white/70 text-sm">{t('footerTagline')}</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-white/60 text-xs mb-1">{t('footerDisclaimer')}</div>
              <div className="text-white/50 text-xs">
                © {new Date().getFullYear()} {t('appName')} · {t('footerRights')} ·{' '}
                Built with ❤️ using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'safeher-india')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-saffron hover:underline"
                >
                  caffeine.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {sosOpen && <SOSOverlay onClose={() => setSosOpen(false)} />}
    </div>
  );
}

const rootRoute = createRootRoute({ component: AppLayout });
const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage });
const safetyTipsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/safety-tips', component: SafetyTipsPage });
const helplinesRoute = createRoute({ getParentRoute: () => rootRoute, path: '/helplines', component: HelplinesPage });
const forBoysRoute = createRoute({ getParentRoute: () => rootRoute, path: '/for-boys', component: ForBoysPage });

const routeTree = rootRoute.addChildren([homeRoute, safetyTipsRoute, helplinesRoute, forBoysRoute]);
const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
