import { Component } from "react";

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.error('error', error)
        console.error('error info', errorInfo)
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }


    render() {
        if(this.state.hasError) {
            return (
                <h3>Error in my site</h3>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary