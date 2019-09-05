import React from 'react';
import { Link } from 'react-router-dom';
import { Content } from 'containers/layout';

function Home() {
  return (
    <Content>
      <Link to="/space-create">Create Space</Link>
      <Link to="/auth/login">Log In</Link>
    </Content>
  );
}

export default Home;
