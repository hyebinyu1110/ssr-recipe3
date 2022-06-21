import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import loadable from '@loadable/component';
const BluePage = loadable(() => import('./pages/BluePage'));
const RedPage = loadable(() => import('./pages/RedPage'));
const UsersPage = loadable(() => import('./pages/UsersPage'));

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  )
}

export default App;
