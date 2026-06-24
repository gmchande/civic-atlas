import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import MapExplorerPage from './pages/MapExplorerPage';
import './App.css';

export default function App() {
  const basename = import.meta.env.BASE_URL === '/'
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MapExplorerPage />} />
          <Route path="/explore" element={<MapExplorerPage />} />
          <Route path="*" element={<MapExplorerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
