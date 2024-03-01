import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import BlogFunctionality from './context/BlogFunctionality';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogFunctionality>
      <App />
    </BlogFunctionality>
  </React.StrictMode>
);


