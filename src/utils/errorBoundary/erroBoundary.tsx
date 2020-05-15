import React from 'react';

type ErrorState = {
    error: string;
    errorInfo: {}
}

class ErrorBoundary extends React.Component<{}, ErrorState> {
    constructor(props) {
        super(props);

        this.state = { error: null, errorInfo: null }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // logToMyService(error, info)
    }


    render() {
        if (this.state.errorInfo) {
            return (
                <h1>There was an error from error boundary</h1>
            )
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary