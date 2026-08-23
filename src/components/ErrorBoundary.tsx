import { Component, type ReactNode, type ErrorInfo } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Application error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-canvas px-6 text-center">
          <h1 className="heading-2 text-ink">Something went wrong</h1>
          <p className="mt-3 text-body max-w-md">An unexpected error occurred. Please refresh the page or try again later.</p>
          <button onClick={() => window.location.reload()} className="btn-primary mt-6">Refresh Page</button>
        </div>
      );
    }
    return this.props.children;
  }
}
