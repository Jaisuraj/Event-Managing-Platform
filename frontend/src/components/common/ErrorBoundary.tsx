import React, { ErrorInfo } from 'react'

interface IErrorBoundaryProps {}
interface IErrorBoundaryState { 
    hasError: boolean 
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
      super(props)
      this.state = { hasError: false }
    }
  
    static getDerivedStateFromError(error: Error) {
      return { hasError: true }
    }
  
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      // Log the error to an error reporting service
      console.log(error, errorInfo)
    }
  
    render() {
      if (this.state.hasError) {
        // Fallback UI
        return <h1>Something went wrong.
			Please <span 
				onClick={window.location.reload}
			>Reload.</span></h1>
      }
  
      return this.props.children
    }
}

  export default ErrorBoundary
  