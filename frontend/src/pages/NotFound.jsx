import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="auth-card notfound-container">
      <h1 className="notfound-code">404</h1>
      <h2 className="auth-title">Page Not Found</h2>
      <p className="auth-subtitle" style={{ marginBottom: '24px' }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="btn">
        Back to Safety
      </Link>
    </div>
  );
}

export default NotFound;
