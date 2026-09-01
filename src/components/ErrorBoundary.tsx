import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error in application:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0b16',
          color: '#ffd6e0',
          fontFamily: 'sans-serif',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Something went wrong</h1>
          <p style={{ color: '#fbfbf2', maxWidth: '500px', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            The website encountered an unexpected error while loading.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 24px',
              backgroundColor: '#ffd6e0',
              color: '#0a0b16',
              border: 'none',
              borderRadius: '9999px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
