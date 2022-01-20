// React imports
import { render } from 'react-dom';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// Page imports
import Custom404Page from '@pages/404Page';
import HomePage from '@pages/HomePage';
// Application imports
import Application from './App';

render(
  <Router>
    <Routes>
      <Route path="/" element={<Application />}>
        <Route path="" element={<HomePage />} />
        {/* 404 Page */}
        <Route path="*" element={<Custom404Page />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
