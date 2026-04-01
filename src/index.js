import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { AmplifyProvider } from '@aws-amplify/ui-react';

try {
  const awsconfig = require('./aws-exports').default;
  Amplify.configure(awsconfig);
} catch {
  // aws-exports.js not found — running without Amplify backend
  // Set REACT_APP_USE_MOCK_DATA=true to use mock data in development
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
  </React.StrictMode>
);

reportWebVitals();
