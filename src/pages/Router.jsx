import Opniao from './Opniao';
import Contato from './Contato';
import Historico from './Historico';
import Home from './Home';
import { Routes, Route } from 'react-router';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/opniao' element={<Opniao />} />
        <Route path='/historico' element={<Historico />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </>
  );
};

export default Router;
