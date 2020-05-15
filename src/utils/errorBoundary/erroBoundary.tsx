import React from 'react';

type ErrorState = {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, ErrorState> {
    constructor(props) {
        super(props);

        this.state = { hasError: false }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
        // logToMyService(error, info)
    }


    render() {
        if (this.state.hasError) {
            return (
                <h1>There was an error from error boundary</h1>
            )
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary