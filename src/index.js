import './index.css';
import App from './components/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react"; // Import both Auth0Provider and useAuth0
import LandingPage from './Landingpage';

const root = createRoot(document.getElementById('root'));

function ConditionalRender() {
  const { isAuthenticated ,isLoading} = useAuth0(); // Use useAuth0 hook within a component
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated ? <App /> : <LandingPage />
  );
}

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-kt4trsg2ofmwm340.us.auth0.com"
      clientId="Sls24xLlbeXX6LZS4DOtTnYNJRlGLX5L"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <ConditionalRender />
    </Auth0Provider>
  </React.StrictMode>
);
