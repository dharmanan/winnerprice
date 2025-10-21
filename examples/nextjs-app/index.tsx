import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

declare global {
  interface Window {
    relayerSDK: any;
  }
}

// Wrapper component to handle SDK loading
function AppWrapper() {
  const [sdkReady, setSdkReady] = React.useState(false);

  React.useEffect(() => {
    // Check if relayer SDK is loaded
    if (typeof window !== 'undefined' && window.relayerSDK) {
      setSdkReady(true);
    } else {
      // Wait for SDK to load
      const checkInterval = setInterval(() => {
        if (typeof window !== 'undefined' && window.relayerSDK) {
          setSdkReady(true);
          clearInterval(checkInterval);
        }
      }, 100);

      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkInterval);
        setSdkReady(true); // Continue anyway
      }, 5000);

      return () => clearInterval(checkInterval);
    }
  }, []);

  if (!sdkReady) {
    return <div className="text-center mt-12">Loading SDK...</div>;
  }

  return <App />;
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
