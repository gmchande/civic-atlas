import { Outlet } from 'react-router-dom';

const MapleLogo = () => (
  <svg className="logo-icon" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path
      d="M14 3l1.5 4.5 3-1.5-1 3.5 4 .5-2.5 2.5 3.5 2-3.5 1 1 3.5-3-1.5L14 19l-2.5-4.5-3 1.5 1-3.5-3.5-1 3.5-2L7 7l4-.5-1-3.5 3 1.5L14 3z"
      fill="#c41e3a"
      opacity="0.9"
    />
    <path d="M14 19v6" stroke="#c41e3a" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function AppLayout() {
  return (
    <div className="app-shell">
      <header className="app-header" aria-label="Civic Atlas">
        <div className="app-wordmark">
          <MapleLogo />
          <div className="logo-text">
            <span className="logo-title">Civic Atlas</span>
            <span className="logo-subtitle">Visual Canada Companion</span>
          </div>
        </div>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
