import React from 'react';
import { useRoutes } from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './routes';
import { useUser } from './shared/hooks/useUser';

const App = () => {
  
  const { user } = useUser();
  const routing = useRoutes(routes);

  return (
    <div>
      {user && <Navbar user={user} />}
      {routing}
    </div>
  );
};

export default App;