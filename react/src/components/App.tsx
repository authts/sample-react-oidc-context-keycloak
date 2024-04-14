import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../constants';
import NotFound from './routes/NotFound';
import Home from './routes/Home';
import About from './routes/About';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Home}>
        <Route index element={<Home />} />
        <Route path={AppRoutes.NotFound} element={<NotFound />} />
        <Route path={AppRoutes.About} element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
