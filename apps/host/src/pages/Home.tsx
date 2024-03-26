import React from 'react';
import { Link } from 'react-router-dom';
const RemoteButton = React.lazy(() => import('app2/Button'));
const Home = () => {
  return (
    <div>
      <h1> App-Host --- Home page</h1>
      <RemoteButton label="this button from remote" />
      <br />
      <br />
      <Link to={`page-2`}>App-Host - page-2</Link>
    </div>
  );
};

export default Home;
