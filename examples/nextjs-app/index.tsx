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
  const [sdkError, setSdkError] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Initialize SDK - check if relayer SDK is loaded
    try {
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
        const timeout = setTimeout(() => {
          clearInterval(checkInterval);
          setSdkReady(true); // Continue anyway
        }, 5000);

        return () => {
          clearInterval(checkInterval);
          clearTimeout(timeout);
        };
      }
    } catch (err) {
      setSdkError(err instanceof Error ? err.message : 'Unknown error');
      setSdkReady(true); // Continue to avoid stuck loading
    }
  }, []);

  if (sdkError) {
    return (
      <div className="text-center mt-12 p-8">
        <h1 className="text-2xl font-bold text-red-600 mb-4">SDK Error</h1>
        <p className="text-gray-600">{sdkError}</p>
        <p className="text-gray-500 mt-4">Check console for more details.</p>
      </div>
    );
  }

  // Don't render App until SDK check is complete (at least attempted)
  if (!sdkReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading FHEVM SDK...</p>
        </div>
      </div>
    );
  }

  return <App sdkReady={sdkReady} />;
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
